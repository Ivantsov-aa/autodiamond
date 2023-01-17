<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'brand' => $this->brand,
            'model' => $this->model,
            'configuration' => $this->configuration,
            'body' => $this->body,
            'engine' => $this->engine,
            'gearbox' => $this->gearbox,
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
