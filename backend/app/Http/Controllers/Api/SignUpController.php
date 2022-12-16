<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class SignUpController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param SignUpRequest $request
     * @param UserService $userService
     * @return JsonResponse
     */
    public function __invoke(SignUpRequest $request, UserService $userService): JsonResponse
    {
        $userService->signUp($request->validated());

        return response()->json(['message' => 'You are registered'], Response::HTTP_OK);
    }
}
