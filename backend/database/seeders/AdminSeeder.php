<?php

namespace Database\Seeders;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Propaganistas\LaravelPhone\PhoneNumber;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        User::create([
            'name' => 'admin',
            'lastname' => 'admin',
            'patronymic' => 'admin',
            'email' => 'admin@test.test',
            'phone' => (string) PhoneNumber::make($faker->e164PhoneNumber(), 'RU'),
            'password' => Hash::make('admin1234'),
            'role' => PredefinedRolesEnum::ADMIN->value
        ]);
    }
}
