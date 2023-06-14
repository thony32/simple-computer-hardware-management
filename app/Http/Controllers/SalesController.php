<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sale::with('product')->get();
        return view('sales.index', compact('sales'));//
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::all();
        return view('sales.create', compact('products'));//
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'customerName' => 'required',
            'product_id' => 'required',
            'purchasedQuantity' => 'required|integer|min:1',
            'totalPrice' => 'required|numeric|min:0',
            'paymentMethod' => 'required',
        ]);

        Sale::create($validatedData);

        return redirect()->route('sales.index')->with('success', 'Sale created successfully!');//
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('sales.show', compact('sale'));//
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $sale->delete();

        return redirect()->route('sales.index')->with('success', 'Sale deleted successfully!');//
    }
}
