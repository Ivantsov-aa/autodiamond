<?php

namespace App\Http\Requests\OneC;

use App\Http\Requests\BaseFormRequest;

/**
 * @property string $email
 * @property string $password
 */
class LoginRequest extends BaseFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|string',
            'password' => 'required|string'
        ];
    }
}
