<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}

    /**
     * Log in and get a bearer token.
     *
     * @unauthenticated
     *
     * @bodyParam email string required Example: user@test.test
     * @bodyParam password string required Example: user1234
     *
     * @apiResource App\Http\Resources\UserResource
     * @apiResourceModel App\Models\User
     * @apiResourceAdditional token=hhjhfddsdghjhjjjhggffsdsdgvvt435dffggs4|1
     *
     * @response 401 {"message": "Bad credentials"}
     *
     * @param LoginRequest $request
     * @return UserResource|JsonResponse
     */
    public function __invoke(LoginRequest $request): UserResource|JsonResponse
    {
        $user = $this->userService->findByEmail($request->email);

        if (
            !$user ||
            $user->role !== PredefinedRolesEnum::USER->value ||
            !Hash::check($request->password, $user->password)
        ) {
            return response()
                ->json([
                    'message' => 'Bad credentials'
                ], Response::HTTP_UNAUTHORIZED);
        }

        return (new UserResource($user))
            ->additional([
                'token' => $user->createToken(config('sanctum.token'))->plainTextToken,
            ]);
    }
}
