<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property int $key
 * @property int|null $parent_key
 */
class Category extends Model
{
    use HasFactory;

    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'key',
        'parent_key'
    ];

    /**
     * @return HasMany
     */
    public function child_categories(): HasMany
    {
        return $this->hasMany(
            self::class,
            'parent_key',
            'key'
        );
    }

    /**
     * @return BelongsTo
     */
    public function parent_category(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_key');
    }

    /**
     * @return HasMany
     */
    public function products(): HasMany
    {
        return  $this->hasMany(Product::class);
    }
}
