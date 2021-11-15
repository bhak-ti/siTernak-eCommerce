import React from "react";

const Card = () => {
  return (
    <div className="shadow-lg w-48 h-80 rounded-xl bg-white __montserat-text cursor-pointer">
      <img
        src="/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg"
        alt="gambar sapi slurd"
        className="w-48 h-44 object-cover rounded-t-xl"
      />
      <div className="p-3">
        <p className="text-textDefault text-sm font-semibold __text-elipsis-one-line">
          Sapi Lokal Grade A+
        </p>
        <p className="text-subtitle text-xs __text-elipsis-two-line mt-1">
          Ternak kualitas terbaik yang dirawat seperti anak sendiri
        </p>
        <div className="mt-2 flex items-center">
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2">
            40%
          </span>
          <p className="text-xs line-through text-subtitle">Rp 1.000.000</p>
        </div>
        <p className="text-textDefault text-sm font-semibold mt-1.5">
          Rp 600.000
        </p>
      </div>
    </div>
  );
};

export default Card;
