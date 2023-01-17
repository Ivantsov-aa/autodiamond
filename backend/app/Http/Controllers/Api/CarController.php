<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\CarService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group Cars
 */
class CarController extends Controller
{
    public function __construct(
        private CarService $carService
    ) {}

    /**
     * Retrieves a list of car brands.
     *
     * @unauthenticated
     *
     * @return JsonResponse
     */
    public function brands(): JsonResponse
    {
        return response()->json([
            'brands' => $this->carService->brands()
        ], Response::HTTP_OK);
    }

    /**
     * Retrieves a list of brand models.
     *
     * @unauthenticated
     * @queryParam brand string required The brand. Example: Dolores
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function models(Request $request): JsonResponse
    {
        $this->validate($request, [
            'brand' => 'required|string|min:1'
        ]);

        return response()->json([
            'models' => $this->carService->models($request->input('brand'))
        ], Response::HTTP_OK);
    }

    /**
     * Retrieves a list of model engines.
     *
     * @unauthenticated
     * @queryParam brand string required The brand. Example: Dolores
     * @queryParam model string required The model. Example: Consectetur
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function engines(Request $request): JsonResponse
    {
        $this->validate($request, [
            'brand' => 'required|string|min:1',
            'model' => 'required|string|min:1'
        ]);

        $engines = $this->carService->engines(
            brand: $request->input('brand'),
            model: $request->input('model')
        );

        return response()->json([
            'engines' => $engines
        ], Response::HTTP_OK);
    }
}
