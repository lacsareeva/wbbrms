<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Admin extends Authenticatable
{
  /** @use HasFactory<\Database\Factories\UserFactory> */
  use HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   * 
   */
  protected $guard = 'admin';
  protected $table = 'admins';
   protected $fillable = [
      'name',
      'mname',
      'lname',
      'suffix',
      'email',
      'password',
      'usertype',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
      'password',
      'remember_token',
  ];

  /**
   * Get the attributes that should be cast.
   *
   * @return array<string, string>
   */
  protected function casts(): array
  {
      return [
          'email_verified_at' => 'datetime',
          'password' => 'hashed',
      ];
  }
}
