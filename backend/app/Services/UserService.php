<?php

namespace App\Services;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function __construct(
        private User $userModel
    ) {}

    public function index()
    {
        return auth()->user()->load('orders');
    }

    /**
     * Returns the user model found by ID or throws Illuminate\Database\Eloquent\ModelNotFoundException
     *
     * @param string $email
     * @return User
     */
    public function findByEmail(string $email): User
    {
        return $this->userModel::where('email', $email)
            ->firstOrFail();
    }

    /**
     * Creates a new User model record with the user role
     *
     * @param array $data
     * @return User
     */
    public function signUp(array $data): User
    {
        $data['password'] = Hash::make($data['password']);

        return $this->userModel::create(array_merge($data, ['role' => PredefinedRolesEnum::USER->value]));
    }
}
