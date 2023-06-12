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

    public function uploadFile(Request $request) {
        if ($request->hasFile('file')){
            $file = $request->file('file');
            $filename = $file->getClientOriginalName();
            $path = public_path("front/public");
            $file->move($path, $filename);
            return response()->json(['message' => 'File uploaded successfully']);
        }
        return response()->json(['message' => 'No File was uploaded'], 400);
    }

    public function deleteProduct($id)
    {
        $product = Product::find($id);
        $product->delete();
        return $product->toJSON();
    }

    // public function updateProduct(Request $request, $id)
    // {
    //     $product = Product::find($id);
    //     $product->Design = $request->Design;
    //     $product->type = $request->type;
    //     $product->Description = $request->Description;
    //     $product->Unit_Price = $request->Unit_Price;
    //     $product->Quantity = $request->Quantity;
    //     $product->Image = $request->Image;
    //     $product->save();
    //     return $product->toJSON();
    // }
}
