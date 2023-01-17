<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'key' => $this->key,
            'name' => $this->name,
            'description' => $this->description,
            'article' => $this->article,
            'type' => $this->type,
            'manufacturer' => $this->manufacturer,
            'country' => $this->country,
            'measure' => $this->measure,
            'price' => $this->price,
            'warranty' => $this->warranty,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'car' => new CarResource($this->whenLoaded('car')),
            'group_of_analogs' => new AnalogResource($this->whenLoaded('group_of_analogs')),
            'storages' => StorageResource::collection($this->whenLoaded('storages'))
        ];
    }
}
