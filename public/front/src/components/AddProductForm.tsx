import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Erroricon from "../assets/Erroricon";

const AddForm = Yup.object().shape({
    productName: Yup.string().required("Required"),
    unitPrice: Yup.string().required("Required"),
});

export default function AddProductForm() {
    const [productName, setproductName] = useState("");
    const [productType, setproductType] = useState("Laser Printer");
    const [description, setDescription] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productImage, setproductImage] = useState(null) as any;
    const [selectedCategory, setSelectedCategory] = useState("");
    const [inputError, setInputError] = useState(false);
    const [unitPriceError, setUnitPriceError] = useState(false);
    const [quantityError, setQuantityError] = useState(false);
    const [productImageError, setproductImageError] = useState(false);

    //* input blur
    const handleInputBlur = () => {
        if (productName === "") {
            setInputError(true);
        }
    };
    const handleUnitPriceBlur = () => {
        if (unitPrice === "") {
            setUnitPriceError(true);
        }
    };
    const handleQuantityBlur = () => {
        if (quantity === "") {
            setQuantityError(true);
        }
    };
    //* input Focus
    const handleInputFocus = () => {
        setInputError(false);
    };
    const handleUnitPriceFocus = () => {
        setUnitPriceError(false);
    };
    const handleQuantityFocus = () => {
        setQuantityError(false);
    };

    // * upload file

    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        if (!file) {
            setproductImage(null);
            setproductImageError(true);
            return;
          }
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
        setproductImageError(false);
    };

    // * add product

    const addProduct = (event: any) => {
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

                fetchProducts();
            })
            .catch((error) => {
                console.error(error);
            });
        toast.success("Product Added Successfully!");
        if (productName === "") {
            setInputError(true);
            // You can also display an error message or perform other actions
            console.log("Field is required");
            return;
        }
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

    return (
        <div className="space-y-4">
            <div>
                (Field with <span className="text-red-500">*</span> is required)
            </div>

            <div className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">
                            Product Name
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className={`input input-bordered w-full ${
                            inputError ? "input-error" : ""
                        }`}
                        value={productName}
                        onChange={(event) => {
                            setproductName(event.target.value);
                            setInputError(false);
                        }}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                    />
                    {inputError && (
                        <div className="flex text-red-500">
                            {" "}
                            <Erroricon /> Required
                        </div>
                    )}
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">
                            Category
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <select
                        className="select select-bordered w-full"
                        value={productType}
                        onChange={(event) => setproductType(event.target.value)}
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
                        onChange={(event) => setDescription(event.target.value)}
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
                        className={`input input-bordered w-full ${
                            unitPriceError ? "input-error" : ""
                        }`}
                        value={unitPrice}
                        onChange={(event) => {
                            setUnitPrice(event.target.value);
                            setUnitPriceError(false);
                        }}
                        onBlur={handleUnitPriceBlur}
                        onFocus={handleUnitPriceFocus}
                    />
                    {unitPriceError && (
                        <div className="flex text-red-500">
                            {" "}
                            <Erroricon /> Required
                        </div>
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
                        className={`input input-bordered w-full ${
                            quantityError ? "input-error" : ""
                        }`}
                        value={quantity}
                        onChange={(event) => {
                            setQuantity(event.target.value);
                            setQuantityError(false);
                        }}
                        onBlur={handleQuantityBlur}
                        onFocus={handleQuantityFocus}
                    />
                    {quantityError && (
                        <div className="flex text-red-500">
                            {" "}
                            <Erroricon /> Required
                        </div>
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
                        className={`file-input file-input-bordered w-full ${productImageError ? 'file-input-error' : ''}`}
                        onChange={handleFileUpload}
                    />
                    {productImageError && (
                        <div className="flex text-red-500">
                            {" "}
                            <Erroricon /> Required
                        </div>
                    )}
                </div>
                <button
                    onClick={addProduct}
                    className="btn bg-[#0079C1] w-full  text-base-200 hover:bg-[#00457C]"
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}
