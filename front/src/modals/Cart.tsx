export default function Cart() {
    return (
        <>
            <button
                className="btn hover:bg-[#00457C] hover:text-white rounded-full"
                onClick={() => window.my_modal_3.showModal()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                {/* <span className="badge badge-sm indicator-item">
                                8
                            </span> */}
            </button>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-4xl">
                    <button
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-2xl text-center">
                        Here is your cart!
                    </h3>

                    {/* Modal container */}

                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Age
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Address
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                                    John Brown
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    45
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    New York No. 1 Lake Park
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        className="text-red-400 hover:text-red-700"
                                                        href="#"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    );
}
