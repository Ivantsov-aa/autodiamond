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


}
