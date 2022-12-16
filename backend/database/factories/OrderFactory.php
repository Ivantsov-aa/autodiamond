<?php

namespace Database\Factories;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\Product;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $users = User::where('role', PredefinedRolesEnum::USER->value)
            ->get();

        $products = Product::with(['category', 'car'])
            ->get();

        $order = $this->getOrderData($products);
        $user = $users->random();

        return [
            'user_id' => $user->id,
            'items' => json_encode($order['items']),
            'total' => $order['total'],
            'address' => $this->faker->address(),
            'phone' => $user->phone,
            'comment' => $this->faker->sentence()
        ];
    }

    /**
     * Returns the total amount and order items
     *
     * @param Collection $products
     * @return array
     * @throws Exception
     */
    public function getOrderData(Collection $products): array
    {
        $products = $products->random(random_int(1, 3));
        $items = [];
        $total = 0;

        foreach ($products as $product) {
            $quantity = random_int(1, 3);
            $productTotal = $product->price * $quantity;
            $total += $productTotal;

            $items[] = [
                'name' => $product->name,
                'article' => $product->article,
                'type' => $product->type,
                'manufacturer' => $product->manufacturer,
                'country' => $product->country,
                'measure' => $product->measure,
                'price' => $product->price,
                'quantity' => $quantity,
                'total' => $productTotal,
                'category' => $product->category->name,
                'car' => $product->car->brand . ' ' . $product->car->model . ' ' . $product->car->configuration
            ];
        }

        return ['total' => $total, 'items' => $items];
    }
}
