<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'key' => $this->key,
            'parent_key' => $this->parent_key,
            'child_categories' => self::collection($this->whenLoaded('child_categories')),
            'parent_category' => new self($this->whenLoaded('parent_category')),
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
