import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


export default function Products() {
    const [productName, setproductName] = useState("");
    const [productType, setproductType] = useState("Laser Printer");
    const [description, setDescription] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productImage, setproductImage] = useState(null) as any;

    // * const for error message
    const [errName, setErrName] = useState(false);

    // * upload file

    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/upload",
                formData
            );
            console.log("File Uploaded");
            console.log("Response:", response.data);
        } catch (err) {
            console.log(err);
        }
        setproductImage(event.target.files[0]);
    };

    // * add product

    const handleSubmit = (event: any) => {
        event.preventDefault();

            const formData = new FormData();
            formData.append("type", productType);
            formData.append("Design", productName);
            formData.append("Description", description);
            formData.append("Unit_Price", unitPrice);
            formData.append("Quantity", quantity);
            formData.append("Image", productImage?.name);

            axios
                .post("http://127.0.0.1:8000/api/products", formData)
                .then((response) => {
                    console.log(response.data);
                    // Handle success
                    fetchProducts();
                })
                .catch((error) => {
                    console.error(error);
                    // Handle error
                });
            toast.success("Product Added Successfully!");
    };

    // * list data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);

    // * fetch products data
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
        <div className="space-y-4">
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <h1 className="text-2xl lg:text-4xl text-center font-bold">
                PRODUCTS MANAGEMENT
            </h1>

            {/* SearchBar */}

            <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                    Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 w-full p-2.5 "
                        placeholder="Search by Name"
                        required
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 mr-2 -ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    Search
                </button>
            </form>
            <div>
                <div className="flex flex-col justify-center lg:flex-row gap-12">
                    {/* Forms */}
                    <div className="space-y-4">
                        <div>
                            (Field with <span className="text-red-500">*</span>{" "}
                            is required)
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Printer Name
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={productName}
                                onChange={(event) =>
                                    setproductName(event.target.value)
                                }
                            />
                            {errName == false ? (
                                ""
                            ) : (
                                <label htmlFor="" className="text-red-500">
                                    Fill this field!
                                </label>
                            )}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Printer Type
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={productType}
                                onChange={(event) =>
                                    setproductType(event.target.value)
                                }
                            >
                                <option selected>Laser Printer</option>
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
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full lg:max-w-lg"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Unit Price
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={unitPrice}
                                onChange={(event) =>
                                    setUnitPrice(event.target.value)
                                }
                            />
                            {errName == false ? (
                                ""
                            ) : (
                                <label htmlFor="" className="text-red-500">
                                    Fill this field!
                                </label>
                            )}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Quantity in Stock
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                value={quantity}
                                onChange={(event) =>
                                    setQuantity(event.target.value)
                                }
                            />
                            {errName == false ? (
                                ""
                            ) : (
                                <label htmlFor="" className="text-red-500">
                                    Fill this field!
                                </label>
                            )}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Printer Image
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                onChange={handleFileUpload}
                            />
                            {errName == false ? (
                                ""
                            ) : (
                                <label htmlFor="" className="text-red-500">
                                    Fill this field!
                                </label>
                            )}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="btn bg-[#0079C1] w-full  text-base-200 hover:bg-[#00457C]"
                        >
                            Add Product
                        </button>
                    </div>

                    {/* Table */}
                    <div className="w-11/12 space-y-8">
                        <select className="select w-full max-w-xs">
                            <option disabled selected>
                                Sort by Product Type
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
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Printer Name</th>
                                        <th>Printer Type</th>
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
                                                    htmlFor={
                                                        product.id +
                                                        "my_modal_6"
                                                    }
                                                    className="btn btn-sm bg-red-500 hover:bg-red-700 text-base-100 rounded-full"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id={
                                                        product.id +
                                                        "my_modal_6"
                                                    }
                                                    className="modal-toggle"
                                                />
                                                <div className="modal">
                                                    <div className="modal-box space-y-4">
                                                        <div className="rounded-full">
                                                            <label
                                                                htmlFor={
                                                                    product.id +
                                                                    "my_modal_6"
                                                                }
                                                                className="btn btn-xs rounded-full"
                                                            >
                                                                x
                                                            </label>
                                                        </div>
                                                        <h3 className="font-bold text-lg text-center">
                                                            Are you sure to
                                                            delete this product?
                                                        </h3>
                                                        <div className="flex flex-row justify-center gap-8">
                                                            <button
                                                                className="btn btn-neutral"
                                                                onClick={() =>
                                                                    deleteProductConfirmation(
                                                                        product.id
                                                                    )
                                                                }
                                                                htmlFor={
                                                                    product.id +
                                                                    "my_modal_6"
                                                                }
                                                            >
                                                                Yes
                                                            </button>
                                                            <button className="btn">
                                                                No
                                                            </button>
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
                </div>
            </div>
        </div>
    );
}
