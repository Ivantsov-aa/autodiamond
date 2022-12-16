<?php

namespace App\Services\OneC;

use App\Models\User;

class LoginService
{
    public function __construct(
        private User $userModel
    ) {}

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
}
