import axios from "axios";
import { useEffect, useState } from "react";
import PaymentModal from "../views/PaymentModal";

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="flex flex-wrap -m-4">
            {products.map((product: any) => (
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                        <img
                            className="h-40 rounded w-full object-cover object-center mb-6"
                            src={product.Image}
                            alt="content"
                        />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                            {product.type}
                        </h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                            {product.Design}
                        </h2>
                        <p className="leading-relaxed text-base h-48 overflow-y-scroll">
                            {product.Description}
                        </p>
                        <div>
                            <div className="flex justify-between items-end">
                                <div className="">
                                    <h1 className="font-bold text-xl">
                                        Ar {product.Unit_Price}
                                    </h1>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <label
                                            htmlFor="my_modal_6"
                                            className="btn btn-neutral"
                                        >
                                            Purchase Now
                                        </label>
                                        <input
                                            type="checkbox"
                                            id="my_modal_6"
                                            className="modal-toggle"
                                        />

                                        {/* Payment modal */}
                                        <PaymentModal />
                                        <div className="badge badge-success gap-2">
                                            Available
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
