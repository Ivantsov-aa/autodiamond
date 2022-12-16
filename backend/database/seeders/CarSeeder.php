<?php

namespace Database\Seeders;

use App\Models\Car;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        $brands = $faker->words();
        $models = $faker->words(15);
        $bodies = $faker->words();
        $engines = $faker->words();
        $gearboxes = $faker->words();

        for ($i = 0; $i < 10; $i++) {
            Car::create([
                'brand' => Str::ucfirst($faker->randomElement($brands)),
                'model' => Str::ucfirst($faker->randomElement($models)),
                'configuration' => $faker->words(3, true),
                'body' => Str::ucfirst($faker->randomElement($bodies)),
                'engine' => Str::ucfirst($faker->randomElement($engines)),
                'gearbox' => Str::ucfirst($faker->randomElement($gearboxes)),
            ]);
        }
    }
}
