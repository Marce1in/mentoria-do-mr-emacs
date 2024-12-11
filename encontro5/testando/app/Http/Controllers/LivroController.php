<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorelivroRequest;
use App\Http\Requests\UpdatelivroRequest;
use App\Models\livro;

class LivroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return livro::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorelivroRequest $request)
    {
        return livro::create($request->all());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(livro $livro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatelivroRequest $request, livro $livro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(livro $livro)
    {
        //
    }
}
