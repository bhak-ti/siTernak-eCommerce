import React from "react";
import Dropdown from "../Dropdown";
import Input from "../Input";
import { staticConst } from "../../static/staticConst";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const { categoriesOptions } = staticConst;

const Navbar = () => {
  const navigation = useNavigate();

  const handleSearch = (e) => {
    const pathname = window.location.pathname;
    if (pathname !== "/product_page") {
      navigation("/product_page");
    }
    console.log(e.target.value);
  };

  return (
    <div className="w-screen shadow-md bg-white fixed z-20 overflow-hidden">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <img src="/assets/logo_si_ternak.png" alt="Logo" className="w-16" />
        <div className="bg-gray-100 rounded grid grid-flow-col divide-x-2 max-w-max p-1">
          <Dropdown noBorder={true} dropdownOpts={categoriesOptions} />
          <Input
            placeholder="Search"
            onChange={handleSearch}
            customStyles="bg-transparent"
          />
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="relative inline-block">
            <RiShoppingCartLine className="text-xl mr-4 text-gray-700" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/2 bg-red-600 rounded-full">
              1
            </span>
          </div>
          <div>
            <img
              src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
              alt="profile_picture"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
