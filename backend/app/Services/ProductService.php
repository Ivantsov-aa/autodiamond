<?php

namespace App\Services;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\Analog;
use App\Models\Car;
use App\Models\Category;
use App\Models\Product;
use App\Models\Storage;
use Illuminate\Contracts\Database\Eloquent\Builder;
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
            ->with(['storages', 'category'])
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

    public function getCategoriesByCarBrandAndModel(string $brand, string $model, string $parent = null)
    {
        return $this->categoryModel::query()
            ->where('parent_key', $parent)
            ->whereRelation('products.car', function (Builder $query) use ($brand, $model) {
                $query->where([
                   ['brand', $brand],
                   ['model', $model]
                ]);
            })
            ->withCount([
                'child_categories' => function (Builder $query) use ($brand, $model) {
                    $query->whereRelation('products.car', function (Builder $query) use ($brand, $model) {
                        $query->where([
                            ['brand', $brand],
                            ['model', $model]
                        ]);
                    });
                }
            ])
            ->orderBy('name')
            ->get();
    }

    public function getProductByArticle(string $article)
    {
        return $this->productModel::query()
            ->where('article', $article)
            ->with(['group_of_analogs.products.storages'])
            ->firstOrFail();
    }

    public function search(string $search, ?string $category = null)
    {
        $products = $this->productModel::query()
            ->where('article', 'LIKE', '%' . $search . '%')
            ->orWhere('name', 'LIKE', '%' . $search . '%')
            ->with(['storages']);

        if ($category)
            $products->whereRelation('category', 'name', '=', $category);

        return $products->get();
    }
}
