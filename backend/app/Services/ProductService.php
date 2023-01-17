<?php

namespace App\Services;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\Analog;
use App\Models\Car;
use App\Models\Category;
use App\Models\Product;
use App\Models\Storage;
use Illuminate\Support\Facades\Hash;

class ProductService
{
    public function __construct(
        private Analog $analogModel,
        private Car $carModel,
        private Category $categoryModel,
        private Product $productModel,
        private Storage $storageModel
    ) {}

    public function getProductsByCarBrandAndModel(string $brand, string $model, ?string $category = null)
    {
        $products = $this->productModel::query()
            ->with('storages')
            ->whereRelation('car', function ($query) use ($brand, $model) {
                $query->where([
                    ['brand', $brand],
                    ['model', $model]
                ]);
            });

        if ($category)
            $products->whereRelation('category', 'name', '=', $category);

        return $products->get();
    }

    public function getProductByArticle(string $article)
    {
        return $this->productModel::query()
            ->where('article', $article)
            ->with(['group_of_analogs.products.storages'])
            ->firstOrFail();
    }
}
