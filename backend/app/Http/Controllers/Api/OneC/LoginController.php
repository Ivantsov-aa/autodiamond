<?php

namespace App\Http\Controllers\Api\OneC;

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\OneC\LoginRequest;
use App\Http\Resources\UserResource;
use App\Services\OneC\LoginService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __construct(
        private LoginService $loginService
    ) {}

    /**
     * @param LoginRequest $request
     * @return UserResource|JsonResponse
     */
    public function __invoke(LoginRequest $request): UserResource|JsonResponse
    {
        $user = $this->loginService->findByEmail($request->email);

        if (
            !$user ||
            $user->role !== PredefinedRolesEnum::ADMIN->value ||
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
