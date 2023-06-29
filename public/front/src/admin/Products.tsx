import axios from "axios";
import { useEffect,  useState } from "react";
import { ToastContainer } from "react-toastify";
import SearchLogo from "../assets/SearchLogo";
import AddProductForm from "../components/AddProductForm";
import ProductTable from "../components/ProductTable";


export default function Products() {



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
            <SearchLogo/>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 w-full p-2.5 "
            placeholder="Search by Product Name"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

        >
          <SearchLogo/>
          Search
        </button>
      </form>


        {/* Add Product */}
      <div>
        <div className="flex flex-col justify-center lg:flex-row gap-12">
          {/* Forms */}
          <AddProductForm/>

          {/* Table */}
          <ProductTable/>
        </div>
      </div>
    </div>
  );
}
