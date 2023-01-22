<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\GetCategoriesRequest;
use App\Http\Requests\GetProductRequest;
use App\Http\Resources\CategoryResource;
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
     * Retrieves categories found by car brand, model and parent category key.
     *
     * @unauthenticated
     * @queryParam brand string required The brand. Example: Dolores
     * @queryParam model string required The model. Example: Consectetur
     * @queryParam parent string The key of the parent category. Example: 701
     *
     * @param GetCategoriesRequest $request
     * @return JsonResponse
     */
    public function getCategoriesByCarBrandAndModel(GetCategoriesRequest $request): JsonResponse
    {
        $categories = $this->productService->getCategoriesByCarBrandAndModel(
            brand: $request->input('brand'),
            model: $request->input('model'),
            parent: $request->input('parent')
        );

        return response()->json([
            'categories' => CategoryResource::collection($categories)
        ], Response::HTTP_OK);
    }

    /**
     * Retrieves product data found by the article.
     *
     * @unauthenticated
     * @urlParam article string required The article of the product. Example: ZVhu0pk3M6UimIIU
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

    /**
     * Retrieves products found by search query. If there is a category parameter in the request, filters products by
     * the category.
     *
     * @unauthenticated
     * @queryParam search string required The search query. Example: ZVhu0pk3M6UimIIU
     * @queryParam category string The category of the products. Example: quos dolores
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function search(Request $request): JsonResponse
    {
        $this->validate($request, [
            'search' => 'required|string|min:1',
            'category' => 'nullable|string|min:1'
        ]);

        $products = $this->productService->search(
            search: $request->input('search'),
            category: $request->input('category')
        );

        return response()->json([
            'products' => ProductResource::collection($products)
        ], Response::HTTP_OK);
    }
}
