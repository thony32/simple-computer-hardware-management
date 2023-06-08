<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function listProduct()
    {
        $products = Product::all();
        return $products->toJSON();
    }

    public function addProduct(Request $request)
    {
        $product = new Product();
        $product->Design = $request->Design;
        $product->type = $request->type;
        $product->Description = $request->Description;
        $product->Unit_Price = $request->Unit_Price;
        $product->Quantity = $request->Quantity;
        $product->Image = $request->Image;
        $product->save();
        return $product->toJSON();
    }
}
