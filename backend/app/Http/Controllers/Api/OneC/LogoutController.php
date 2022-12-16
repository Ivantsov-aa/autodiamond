<?php

namespace App\Http\Controllers\Api\OneC;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class LogoutController extends Controller
{
    public function __invoke(): JsonResponse {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out'], Response::HTTP_OK);
    }
}
