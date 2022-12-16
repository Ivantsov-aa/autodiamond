<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'brand' => Str::ucfirst($this->faker->word()),
            'model' => Str::ucfirst($this->faker->word()),
            'configuration' => $this->faker->words(3, true),
            'body' => Str::ucfirst($this->faker->word()),
            'engine' => Str::ucfirst($this->faker->word()),
            'gearbox' => Str::ucfirst($this->faker->word()),
        ];
    }
}
