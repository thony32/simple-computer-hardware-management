import axios from "axios";
import { useEffect, useState } from "react";

export default function Printers() {
    const [printerName, setPrinterName] = useState("");
    const [printerType, setPrinterType] = useState("Laser Printer");
    const [description, setDescription] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [printerImage, setPrinterImage] = useState(null);
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("type", printerType);
        formData.append("Design", printerName);
        formData.append("Description", description);
        formData.append("Unit_Price", unitPrice);
        formData.append("Quantity", quantity);
        formData.append("Image", printerImage as any);

        axios
            .post("http://127.0.0.1:8000/api/products", formData)
            .then((response) => {
                console.log(response.data);
                // Handle success
            })
            .catch((error) => {
                console.error(error);
                // Handle error
            });
    };

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
        <div className="space-y-8">
            <h1 className="text-4xl text-center font-bold">
                PRINTERS MANAGEMENT
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-40">
                    <div className="space-y-8">
                        <div>
                            <label className="label">
                                <span className="label-text">Printer Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={printerName}
                                onChange={(event) =>
                                    setPrinterName(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Printer Type</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={printerType}
                                onChange={(event) =>
                                    setPrinterType(event.target.value)
                                }
                            >
                                <option selected>Laser Printer</option>
                                <option>Inkjet Printer</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={unitPrice}
                                onChange={(event) =>
                                    setUnitPrice(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Quantity in Stock
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={quantity}
                                onChange={(event) =>
                                    setQuantity(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Printer Image
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-xs"
                                onChange={(event : any) =>
                                    setPrinterImage(event.target.files[0])
                                }
                            />
                        </div>
                        <button type="submit" className="btn bg-[#0079C1] w-full max-w-xs text-base-200 hover:bg-[#00457C]">
                            Add new printer
                        </button>
                    </div>
                    <div className="w-11/12 space-y-8">
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                                    placeholder="Search Mockups, Logos, Design Templates..."
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
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Printer Name</th>
                                        <th>Printer Type</th>
                                        <th>Description</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
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
                                            <th className="space-x-2">
                                                <button className="btn btn-neutral btn-xs">
                                                    edit
                                                </button>
                                                <button className="btn btn-error btn-xs">
                                                    remove
                                                </button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
