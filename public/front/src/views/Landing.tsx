import axios from "axios";
import { useEffect, useState } from "react";



export default function Landing() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
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
                        {products.map((product :any) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                                    <img
                                        className="h-40 rounded w-full object-cover object-center mb-6"
                                        src={product.Image}
                                        alt="content"
                                    />
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                        {product.Design}
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        {product.Description}
                                    </p>
                                    <div>
                                        <div className="flex justify-between items-end">
                                            <div className="">
                                                <h1 className="font-bold text-2xl">
                                                    Ar {product.Unit_Price}
                                                </h1>
                                            </div>
                                            <div>
                                                <div className="flex flex-col gap-4">
                                                    <button className="btn btn-neutral">
                                                        BUY NOW
                                                    </button>
                                                    <div className="badge badge-success gap-2">
                                                        Available
                                                    </div>
                                                    {/* <div className="badge badge-error gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        className="inline-block w-4 h-4 stroke-current"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        ></path>
                                                    </svg>
                                                    Out of stock
                                                </div> */}
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
