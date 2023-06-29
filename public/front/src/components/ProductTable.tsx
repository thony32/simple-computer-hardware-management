import { useEffect, useState } from "react";
import DeleteLogo from "../assets/DeleteLogo";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductTable() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value) as any;
  };

  // * list data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // * delete product api
  const deleteProduct = (id: any) => {
    // console.log(id);
    axios
      .delete(`http://127.0.0.1:8000/api/products/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchProducts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // * Delete Confirmation
  const deleteProductConfirmation = (productId: any) => {
    // console.log(productId);
    deleteProduct(productId);
    toast.success("Product deleted successfully!");
  };


  return (
    <div className="w-11/12 space-y-8">

    {/* Category Filter */}
      <select className="select w-full max-w-xs">
        <option
          disabled
          selected
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          Sort by Category
        </option>
        <option>Laser Printer</option>
        <option>Inkjet Printer</option>
        <option>Others</option>
        <option>Laptop</option>
        <option>Desktop</option>
        <option>Monitors</option>
        <option>Switches</option>
        <option>Routers</option>
        <option>Servers</option>
        <option>Mouse</option>
        <option>Keyboards</option>
        <option>Inverter</option>
      </select>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Quantity In Stock</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {products.map((product: any) => (
              <tr>
                <td>{product.Design}</td>
                <td>{product.type}</td>
                <td>{product.Description}</td>
                <td>{product.Unit_Price}</td>
                <td>{product.Quantity}</td>
                <td>{product.Image}</td>
                <th>
                  <label
                    htmlFor={product.id + "my_modal_6"}
                    className="btn btn-sm bg-red-500 hover:bg-red-700 text-base-100 rounded-full"
                  >
                    <DeleteLogo />
                  </label>
                  <input
                    type="checkbox"
                    id={product.id + "my_modal_6"}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box space-y-4">
                      <div className="rounded-full">
                        <label
                          htmlFor={product.id + "my_modal_6"}
                          className="btn btn-xs rounded-full"
                        >
                          x
                        </label>
                      </div>
                      <h3 className="font-bold text-lg text-center">
                        Are you sure to delete this product?
                      </h3>
                      <div className="flex flex-row justify-center gap-8">
                        <button
                          className="btn btn-neutral"
                          onClick={() => deleteProductConfirmation(product.id)}
                          htmlFor={product.id + "my_modal_6"}
                        >
                          Yes
                        </button>
                        <button className="btn">No</button>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
