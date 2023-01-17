<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $key
 * @property string $name
 * @property string $description
 * @property string $article
 * @property string $type
 * @property string $manufacturer
 * @property string|null $country
 * @property string $measure
 * @property float $price
 * @property string $warranty
 * @property int $category_id
 * @property int $car_id
 * @property int|null $analog_id
 * @property string $created_at
 * @property string $updated_at
 */
class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'key',
        'name',
        'description',
        'article',
        'type',
        'manufacturer',
        'country',
        'measure',
        'price',
        'warranty',
        'category_id',
        'car_id',
        'analog_id'
    ];

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * @return BelongsTo
     */
    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class, 'car_id');
    }

    /**
     * @return BelongsToMany
     */
    public function storages(): BelongsToMany
    {
        return $this->belongsToMany(Storage::class)
            ->withPivot('quantity')
            ->orderByPivot('quantity', 'desc');
    }

    /**
     * @return BelongsTo
     */
    public function group_of_analogs(): BelongsTo
    {
        return $this->belongsTo(Analog::class, 'analog_id');
    }
}
