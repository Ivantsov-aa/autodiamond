<?php

namespace Database\Seeders;

use App\Models\Category;
use Exception;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $parentCategories = Category::factory()
            ->count(10)
            ->create();

        foreach ($parentCategories as $parentCategory) {
            Category::factory()
                ->count(random_int(2, 5))
                ->state([
                    'parent_key' => $parentCategory->key
                ])
                ->create();
        }
    }
}
