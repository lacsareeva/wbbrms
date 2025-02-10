<?php

namespace App\Http\Controllers\Resident\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('resident.auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {

        try {
            $request->authenticate();

            session()->flash('success', 'Login successful!');
            return redirect()->intended(route('resident.dashboard'));
        } catch (ValidationException $e) {
            if ($e->getMessage() === 'Your account is not verified. Please contact the administrator.') {
                return back()->withErrors(['email' => 'Your account is not verified. Please wait for the admin to verify.'])->withInput();
            }
            return back()->withErrors($e->errors());
        } catch (\Exception $e) {
            return back()->withErrors(['email' => 'An unexpected error occurred.']);
        }
    }
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/resident/login');
    }
}
