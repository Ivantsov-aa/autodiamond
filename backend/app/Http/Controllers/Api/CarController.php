<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\CarService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CarController extends Controller
{
    public function __construct(
        private CarService $carService
    ) {}

    public function brands()
    {
        return response()->json([
            'brands' => $this->carService->brands()
        ], Response::HTTP_OK);
    }

    public function models(Request $request)
    {
        $brand = $request->get('brand');

        return response()->json([
            'models' => $this->carService->models($brand)
        ], Response::HTTP_OK);
    }
}
