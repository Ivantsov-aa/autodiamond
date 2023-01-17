<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class LogoutController extends Controller
{
    /**
     * Deletes user authentication tokens.
     *
     * @authenticated
     * @response 200 {"message": "Logged out"}
     *
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out'], Response::HTTP_OK);
    }
}
