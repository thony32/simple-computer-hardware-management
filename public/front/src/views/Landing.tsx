import axios from "axios";
import { useEffect, useState } from "react";

export default function Landing() {
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
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 bg-base-200 p-8">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Pitchfork Kickstarter Taxidermy
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them man bun deep jianbing selfies heirloom prism
                            food truck ugh squid celiac humblebrag.
                        </p>
                    </div>

                    {/* card */}

                    <div className="flex flex-wrap -m-4">
                        {products.map((product: any) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                                    <img
                                        className="h-40 rounded w-full object-cover object-center mb-6"
                                        src={product.Image}
                                        alt="content"
                                    />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.type}</h3>
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
                                                    <div className="modal">
                                                        <div className="modal-box">
                                                            <div>
                                                                <label
                                                                    htmlFor="my_modal_6"
                                                                    className="btn btn-xs rounded-full"
                                                                >
                                                                    x
                                                                </label>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="form-control w-full">
                                                                    <label className="label">
                                                                        <span className="label-text">
                                                                            Full Name
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Enter your full name"
                                                                        className="input input-bordered w-full "
                                                                    />
                                                                </div>
                                                                <div className="form-control w-full">
                                                                    <label className="label">
                                                                        <span className="label-text">
                                                                            Quantity
                                                                            you
                                                                            want
                                                                            to
                                                                            buy?
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        placeholder="Enter the quantity"
                                                                        className="input input-bordered w-full "
                                                                    />
                                                                </div>
                                                                <div className="form-control w-full">
                                                                    <label className="label">
                                                                        <span className="label-text">
                                                                            Payment
                                                                            Method
                                                                        </span>
                                                                    </label>
                                                                    <div className="flex gap-x-6">
                                                                        <div className="flex">
                                                                            <input
                                                                                type="radio"
                                                                                name="hs-radio-group"
                                                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                                                                                id="hs-radio-group-1"
                                                                                checked
                                                                            />
                                                                            <label
                                                                                for="hs-radio-group-1"
                                                                                className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                                                                            >
                                                                                Cash
                                                                            </label>
                                                                        </div>

                                                                        <div className="flex">
                                                                            <input
                                                                                type="radio"
                                                                                name="hs-radio-group"
                                                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                                                                                id="hs-radio-group-2"
                                                                            />
                                                                            <label
                                                                                for="hs-radio-group-2"
                                                                                className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                                                                            >
                                                                                Mvola
                                                                            </label>
                                                                        </div>

                                                                        <div className="flex">
                                                                            <input
                                                                                type="radio"
                                                                                name="hs-radio-group"
                                                                                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
                                                                                id="hs-radio-group-3"
                                                                            />
                                                                            <label
                                                                                for="hs-radio-group-3"
                                                                                className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                                                                            >
                                                                                VISA
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-center gap-4">
                                                                    <button className="btn btn-neutral">
                                                                        Purchase
                                                                        Now
                                                                    </button>
                                                                    <div>
                                                                        <label
                                                                            htmlFor="my_modal_6"
                                                                            className="btn"
                                                                        >
                                                                            Cancel
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                </div>
            </section>
        </div>
    );
}
