<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            // TODO Нужна таблица способов доставки, способов оплаты, адресов мест самовывоза

            // код товара
            $table->string('key');
            // наименование
            $table->string('name');
            // описание
            $table->text('description');
            // артикул
            $table->string('article');
            // вид номенклатуры
            $table->string('type');
            // производитель
            $table->string('manufacturer');
            // страна происхождения
            $table->string('country')->nullable();
            // единица измерения
            $table->string('measure');
            // цена
            $table->decimal('price');
            // гарантия
            $table->text('warranty');
            // раздел каталога / категория
            $table->unsignedBigInteger('category_id');
            // модель машины
            $table->unsignedBigInteger('car_id');

            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
