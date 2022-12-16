<?php

namespace Database\Factories;

use App\Models\Analog;
use App\Models\Car;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $types = ['товар', 'услуга'];
        $categories = Category::all();
        $cars = Car::all();
        $analogs = Analog::all();

        return [
            'key' => Str::random(),
            'name' => Str::ucfirst($this->faker->word()),
            'description' => $this->faker->sentence(),
            'article' => Str::random(),
            'type' => $this->faker->randomElement($types),
            'manufacturer' => $this->faker->company(),
            'country' => $this->faker->country(),
            'measure' => 'шт',
            'price' => $this->faker->randomFloat(2, 0.01, 100),
            'warranty' => $this->faker->paragraph(),
            'category_id' => $this->faker->randomElement($categories->pluck('id')),
            'car_id' => $this->faker->randomElement($cars->pluck('id')),
            'analog_id' => $this->faker->boolean(25) ? $analogs->random()->id : null
        ];
    }
}
