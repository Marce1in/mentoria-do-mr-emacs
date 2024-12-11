<?php

namespace Database\Seeders;

use App\Models\livro;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LivroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Livro::factory()
            ->count(10)
            ->create();
        //
    }
}
