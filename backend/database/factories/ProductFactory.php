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
        $type = $this->faker->boolean(90) ? 'товар' : 'услуга';
        $categories = Category::all();
        $cars = Car::all();
        $analogs = Analog::all();

        if ($type === 'товар') $analog_id = $this->faker->boolean() ? $analogs->random()->id : null;
        else $analog_id = null;

        return [
            'key' => Str::random(),
            'name' => Str::ucfirst($this->faker->word()),
            'description' => $this->faker->sentence(),
            'article' => Str::random(),
            'type' => $type,
            'manufacturer' => $this->faker->company(),
            'country' => $this->faker->country(),
            'measure' => 'шт',
            'price' => $this->faker->randomFloat(2, 0.01, 100),
            'warranty' => $this->faker->paragraph(),
            'category_id' => $this->faker->randomElement($categories->pluck('id')),
            'car_id' => $this->faker->randomElement($cars->pluck('id')),
            'analog_id' => $analog_id
        ];
    }
}
