<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        // Ensure the request is not rate-limited
        $this->ensureIsNotRateLimited();

        // Extract credentials from the request
        $credentials = $this->only('email', 'password');
        $remember = $this->boolean('remember');

        // Attempt login
        if (!Auth::attempt($credentials, $remember)) {
            // Increment rate limiter on failed attempt
            RateLimiter::hit($this->throttleKey(), 90); // Block for 60 seconds per failed attempt

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'), // Failed login message
            ]);
        }

        $user = Auth::user();

        // Check if the user is verified
        if ($user->verificationInfo === 'not verified') {
            // Log out the user immediately
            Auth::logout();

            throw ValidationException::withMessages([
                'email' => 'Your account is not verified. Please contact the administrator.',
            ]);
        }

        // Clear rate limit if login is successful
        RateLimiter::clear($this->throttleKey());
    }
    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 3)) {
            return;
        }
        // Fire a Lockout event (optional)
        event(new Lockout($this));

        // Get remaining cooldown time
        $seconds = RateLimiter::availableIn($this->throttleKey());

        // Throw validation exception with throttle message
        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
        
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('email')) . '|' . $this->ip());
    }
}
