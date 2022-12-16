<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductStorageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::all();
        $storages = Storage::all();

        foreach ($products as $product) {
            foreach ($storages as $storage) {
                DB::table('product_storage')->insert([
                    'product_id' => $product->id,
                    'quantity' => random_int(0, 10),
                    'storage_id'  => $storage->id
                ]);
            }
        }
    }
}
