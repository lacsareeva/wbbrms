<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class AdminLoginRequest extends FormRequest
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
     * @throws ValidationException
     */
    public function authenticate(): void
    {
        // Ensure the request is not rate-limited
        $this->ensureIsNotRateLimited();

        // Attempt authentication using the 'admin' guard
        if (!Auth::guard('admin')->attempt($this->only('email', 'password'), $this->boolean('remember'))) {
            // If login fails, increase the attempt count
            RateLimiter::hit($this->throttleKey(), 90); // Block for 60 seconds per failed attempt

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        // If authentication is successful, clear the rate limiter
        RateLimiter::clear($this->throttleKey());
    }
    /**
     * Ensure the login request is not rate limited.
     *
     * @throws ValidationException
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
     * Get the rate-limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::lower($this->input('email')).'|'.$this->ip();
    }
}
