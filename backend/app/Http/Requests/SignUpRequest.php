<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use Propaganistas\LaravelPhone\PhoneNumber;

/**
 * @property string $name
 * @property string $lastname
 * @property string $patronymic
 * @property string $phone
 * @property string $email
 * @property string $password
 */
class SignUpRequest extends BaseFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|between:1,255',
            'lastname' => 'required|string|between:1,255',
            'patronymic' => 'nullable|string|between:1,255',
            'phone' => 'required|string|phone:RU',
            'email' => 'required|string|email|unique:App\Models\User,email',
            'password' => [
                'required',
                'string',
                'confirmed',
                Password::defaults()
            ],
            'password_confirmation' => 'required|string|same:password',
        ];
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'name' => Str::ucfirst(Str::lower($this->name)),
            'lastname' => Str::ucfirst(Str::lower($this->lastname)),
            'patronymic' => Str::ucfirst(Str::lower($this->patronymic ?? '')),
            'phone' => (string) PhoneNumber::make($this->phone, 'RU')
        ]);
    }
}
