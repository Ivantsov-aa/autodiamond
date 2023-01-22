<?php

namespace App\Http\Requests;

/**
 * @property string $brand
 * @property string $model
 * @property string $parent
 */
class GetCategoriesRequest extends BaseFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'brand' => 'required|string|min:1',
            'model' => 'required|string|min:1',
            'parent' => 'nullable|string|min:1',
        ];
    }
}
