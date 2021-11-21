import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { staticConst } from "../../static/staticConst";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Cart = () => {
  const [totalQty, setTotalQty] = useState(2);
  const data = staticConst.stasticCardData[11];

  return (
    <div className="__montserat-text text-gray-900">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull grid gap-x-8">
          <h1 className="font-semibold">Keranjang</h1>
          <div
            className="grid mt-4 gap-x-4"
            style={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <div className="rounded-md border">
              <div>
                <div className="border-b-2 px-4 border-gray-100 py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://pbs.twimg.com/profile_images/1265352727393005569/PIQK5Hbj.jpg"
                      alt="seller images"
                      className="object-cover w-12 h-12 rounded-full shadow-lg transition cursor-pointer"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-sm __text-elipsis-one-line max-w-xs">
                        Pria Bertopi Kuning Shop
                      </p>
                      <p className="text-xs text-gray-400 __text-elipsis-one-line max-w-xs">
                        Selamat Datang di peternakan pria bertopi kuning.
                      </p>
                    </div>
                  </div>
                  <button className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                    Edit Barang
                    <span>
                      <BsPencil className="ml-2 text-sm" />
                    </span>
                  </button>
                </div>
                <div className="px-8 py-4 flex items-center w-full">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox focus:ring-0 border-2 border-gray-500 focus:border-gray-300 rounded"
                      />
                    </label>
                  </div>
                  <img
                    src={data?.product_image}
                    alt="product images"
                    className=" ml-4 object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
                  />
                  <div className="ml-4 w-full">
                    <p className="text-sm font-medium">{data?.product_name}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-base font-bold mt-1.5">
                          Rp{" "}
                          {Intl.NumberFormat("en-US").format(
                            data?.discount_price || data?.price
                          )}
                        </p>
                        {data?.discount_price && (
                          <div className="mt-1 flex items-center text-sm">
                            <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                              {((data?.price - data?.discount_price) * 100) /
                                data?.price +
                                "%"}
                            </span>
                            <p className="line-through text-subtitle">
                              Rp{" "}
                              {Intl.NumberFormat("en-US").format(data?.price)}
                            </p>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex items-center justify-between w-32 mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                        style={{ maxWidth: 100 }}
                      >
                        <AiOutlinePlusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === data?.quantity
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty + 1)
                          }
                        />
                        <span>{totalQty}</span>
                        <AiOutlineMinusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === 1
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty - 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 flex items-center w-full">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox focus:ring-0 border-2 border-gray-500 focus:border-gray-300 rounded"
                      />
                    </label>
                  </div>
                  <img
                    src={data?.product_image}
                    alt="product images"
                    className=" ml-4 object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
                  />
                  <div className="ml-4 w-full">
                    <p className="text-sm font-medium">{data?.product_name}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-base font-bold mt-1.5">
                          Rp{" "}
                          {Intl.NumberFormat("en-US").format(
                            data?.discount_price || data?.price
                          )}
                        </p>
                        {data?.discount_price && (
                          <div className="mt-1 flex items-center text-sm">
                            <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                              {((data?.price - data?.discount_price) * 100) /
                                data?.price +
                                "%"}
                            </span>
                            <p className="line-through text-subtitle">
                              Rp{" "}
                              {Intl.NumberFormat("en-US").format(data?.price)}
                            </p>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex items-center justify-between w-32 mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                        style={{ maxWidth: 100 }}
                      >
                        <AiOutlinePlusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === data?.quantity
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty + 1)
                          }
                        />
                        <span>{totalQty}</span>
                        <AiOutlineMinusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === 1
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty - 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* next shop */}
                <div className="border-b-2 border-t-2 mt-4 px-4 border-gray-100 py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://static.tvtropes.org/pmwiki/pub/images/old_man_jenkins.png"
                      alt="seller images"
                      className="object-cover w-12 h-12 rounded-full shadow-lg transition cursor-pointer"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-sm __text-elipsis-one-line max-w-xs">
                        Peternakan Situa Jenkins
                      </p>
                      <p className="text-xs text-gray-400 __text-elipsis-one-line max-w-xs">
                        Kualitas Terbaik Hasil Peternakan Yang Sudah Terbukti
                        Selama 20th
                      </p>
                    </div>
                  </div>
                  <button className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                    Edit Barang
                    <span>
                      <BsPencil className="ml-2 text-sm" />
                    </span>
                  </button>
                </div>
                <div className="px-8 py-4 flex items-center w-full">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox focus:ring-0 border-2 border-gray-500 focus:border-gray-300 rounded"
                      />
                    </label>
                  </div>
                  <img
                    src={data?.product_image}
                    alt="product images"
                    className=" ml-4 object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
                  />
                  <div className="ml-4 w-full">
                    <p className="text-sm font-medium">{data?.product_name}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-base font-bold mt-1.5">
                          Rp{" "}
                          {Intl.NumberFormat("en-US").format(
                            data?.discount_price || data?.price
                          )}
                        </p>
                        {data?.discount_price && (
                          <div className="mt-1 flex items-center text-sm">
                            <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                              {((data?.price - data?.discount_price) * 100) /
                                data?.price +
                                "%"}
                            </span>
                            <p className="line-through text-subtitle">
                              Rp{" "}
                              {Intl.NumberFormat("en-US").format(data?.price)}
                            </p>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex items-center justify-between w-32 mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                        style={{ maxWidth: 100 }}
                      >
                        <AiOutlinePlusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === data?.quantity
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty + 1)
                          }
                        />
                        <span>{totalQty}</span>
                        <AiOutlineMinusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === 1
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty - 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 flex items-center w-full">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox focus:ring-0 border-2 border-gray-500 focus:border-gray-300 rounded"
                      />
                    </label>
                  </div>
                  <img
                    src={data?.product_image}
                    alt="product images"
                    className=" ml-4 object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
                  />
                  <div className="ml-4 w-full">
                    <p className="text-sm font-medium">{data?.product_name}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-base font-bold mt-1.5">
                          Rp{" "}
                          {Intl.NumberFormat("en-US").format(
                            data?.discount_price || data?.price
                          )}
                        </p>
                        {data?.discount_price && (
                          <div className="mt-1 flex items-center text-sm">
                            <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                              {((data?.price - data?.discount_price) * 100) /
                                data?.price +
                                "%"}
                            </span>
                            <p className="line-through text-subtitle">
                              Rp{" "}
                              {Intl.NumberFormat("en-US").format(data?.price)}
                            </p>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex items-center justify-between w-32 mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                        style={{ maxWidth: 100 }}
                      >
                        <AiOutlinePlusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === data?.quantity
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty + 1)
                          }
                        />
                        <span>{totalQty}</span>
                        <AiOutlineMinusCircle
                          className="text-xl cursor-pointer"
                          onClick={() =>
                            totalQty === 1
                              ? setTotalQty(totalQty)
                              : setTotalQty(totalQty - 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* panel ringkasan belanja */}
            <div>
              <div className="rounded-md border shadow p-5">
                <div className="font-semibold text-sm">Ringkasan Belanja :</div>
                <div className="text-sm text-gray-600 border-b-2 py-4 mt-2">
                  <div className="flex justify-between items-center font-medium">
                    <div>Total Harga({totalQty} barang)</div>
                    <div>
                      Rp {Intl.NumberFormat("en-US").format(totalQty * 1000000)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-medium mt-1">
                    <div>Total Diskon({totalQty} barang)</div>
                    <div>
                      Rp {Intl.NumberFormat("en-US").format(totalQty * 400000)}
                    </div>
                  </div>
                </div>
                <div className="flex text-sm justify-between items-center font-semibold mt-5">
                  <div>Total Harga</div>
                  <div>
                    Rp {Intl.NumberFormat("en-US").format(totalQty * 600000)}
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-9 items-center">
                  <button className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
