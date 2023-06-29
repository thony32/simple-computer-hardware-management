

export default function PaymentModal() {
  return (
    <div className="modal">
                            <div className="modal-box">
                              <div>
                                <label
                                  htmlFor="my_modal_6"
                                  className="btn btn-xs rounded-full bg-red-500 text-base-200 hover:bg-red-700"
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
                                      Quantity you want to buy?
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
                                      Payment Method
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
                                    Purchase Now
                                  </button>
                                  <div>
                                    <label htmlFor="my_modal_6" className="btn">
                                      Cancel
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
  )
}
