<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\GetProductRequest;
use App\Http\Resources\ProductResource;
use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group Products
 */
class ProductController extends Controller
{
    public function __construct(
        private ProductService $productService
    ) {}

    /**
     * Retrieves products found by car brand and model. If there is a category parameter in the request, products from
     * this category will be extracted.
     *
     * @unauthenticated
     * @queryParam brand string required The brand. Example: Dolores
     * @queryParam model string required The model. Example: Consectetur
     * @queryParam category string The category of the products. Example: officia
     *
     * @param GetProductRequest $request
     * @return JsonResponse
     */
    public function getProductsByCarBrandAndModel(GetProductRequest $request): JsonResponse
    {
        $products = $this->productService->getProductsByCarBrandAndModel(
            brand: $request->brand,
            model: $request->model,
            category: $request->category
        );

        return response()->json([
            'products' => ProductResource::collection($products)
        ], Response::HTTP_OK);
    }

    /**
     * Retrieves product data found by the article.
     *
     * @unauthenticated
     * @urlParam article string required The article of the product. Example: LtH6MFkBYHuVY98N
     *
     * @param string $article
     * @return JsonResponse
     */
    public function getProductByArticle(string $article): JsonResponse
    {
        $product = $this->productService->getProductByArticle($article);

        return response()->json([
            'product' => new ProductResource($product)
        ], Response::HTTP_OK);
    }
}
