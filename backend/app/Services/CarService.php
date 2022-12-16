<?php

namespace App\Services;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Models\Analog;
use App\Models\Car;
use App\Models\Category;
use App\Models\Product;
use App\Models\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CarService
{
    public function __construct(
        private Car $carModel
    ) {}

    public function brands()
    {
        return $this->carModel::select('brand')
            ->distinct()
            ->get();
    }

    public function models(string $brand)
    {
        return $this->carModel::select('model')
            ->where('brand', $brand)
            ->get();
    }
}
