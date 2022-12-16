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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            // марка
            $table->string('brand');
            // модель
            $table->string('model');
            // варианты комплектации
            $table->string('configuration');
            // тип кузова
            $table->string('body');
            // тип двигателя
            $table->string('engine');
            // тип КПП
            $table->string('gearbox');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
};
