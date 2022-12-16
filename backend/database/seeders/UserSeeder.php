<?php

namespace Database\Seeders;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Propaganistas\LaravelPhone\PhoneNumber;

class UserSeeder extends Seeder
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
            'name' => 'user',
            'lastname' => 'user',
            'patronymic' => 'user',
            'email' => 'user@test.test',
            'phone' => (string) PhoneNumber::make($faker->e164PhoneNumber(), 'RU'),
            'password' => Hash::make('user1234'),
            'role' => PredefinedRolesEnum::USER->value
        ]);

        User::factory()
            ->count(3)
            ->create();
    }
}
