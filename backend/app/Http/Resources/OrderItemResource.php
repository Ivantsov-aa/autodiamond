<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'car' => $this['car'],
            'name' => $this['name'],
            'type' => $this['type'],
            'price' => $this['price'],
            'total' => $this['total'],
            'article' => $this['article'],
            'country' => $this['country'],
            'measure' => $this['measure'],
            'category' => $this['category'],
            'quantity' => $this['quantity'],
            'manufacturer' => $this['manufacturer']
        ];
    }
}
