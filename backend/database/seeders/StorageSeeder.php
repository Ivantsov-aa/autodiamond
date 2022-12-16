<?php

namespace Database\Seeders;

use App\Models\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StorageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Storage::create([
            'name' => 'Volzhsk',
            'city' => 'Волжский',
            'address' => 'Ленина 104а'
        ]);

        Storage::create([
            'name' => 'Astr',
            'city' => 'Астрахань',
            'address' => 'Боевая 2'
        ]);

        Storage::create([
            'name' => 'Astr',
            'city' => 'Астрахань',
            'address' => 'Б.Хмельницкого 5'
        ]);

        Storage::create([
            'name' => 'Kras',
            'city' => 'Краснодар',
            'address' => 'Российская 488'
        ]);

        Storage::create([
            'name' => 'Erem',
            'city' => 'Волгоград',
            'address' => 'Ерёменко 53'
        ]);

        Storage::create([
            'name' => 'Ang',
            'city' => 'Волгоград',
            'address' => 'Ангарская 90'
        ]);

        Storage::create([
            'name' => 'Kolos',
            'city' => 'Волгоград',
            'address' => 'Колосовая 12'
        ]);

        Storage::create([
            'name' => 'Stal',
            'city' => 'Волгоград',
            'address' => 'Проспект героев сталинграда 21'
        ]);

        Storage::create([
            'name' => 'Tresh',
            'city' => 'Волгоград',
            'address' => 'Землячки 39г'
        ]);
    }
}
