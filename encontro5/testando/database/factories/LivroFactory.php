<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\livro>
 */
class LivroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $titulo = $this->faker->sentence;
        $nome = $this->faker->name;
        $estoque = $this->faker->numberBetween(1, 10);

        return [
            "nome" => $nome,
            "titulo" => $titulo,
            "estoque" => $estoque
        ];
    }
}
