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
     * Sign up a new user.
     *
     * @unauthenticated
     * @bodyParam name string required The username. Example: Will
     * @bodyParam lastname string required The lastname. Example: Smith
     * @bodyParam patronymic string The user patronymic.
     * @bodyParam phone string required The user's phone number. Example: +12252668081
     * @bodyParam email string required The user's email. Example: user@test.com
     * @bodyParam password string required The user's password.
     * @bodyParam password_confirmation string required
     *
     * @unauthenticated
     * @response 200 {"message": "You are registered"}
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
