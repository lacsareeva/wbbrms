<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EnsureCorrectGuard;
use App\Http\Middleware\CheckUserRole;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        Route::aliasMiddleware('check.user.role', CheckUserRole::class);
        if (config('app.env') === 'production') {
        URL::forceScheme('https'); // Forces HTTPS in production
       }
    }
}
