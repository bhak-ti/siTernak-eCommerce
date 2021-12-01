import React from "react";
import { staticConst } from "../../../static/staticConst";
import { useNavigate } from "react-router";

const SideMenu = ({ userStatus }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg __montserat-text shadow border border-gray-200 bg-white py-5">
      <div
        className="flex items-center px-5 pb-5 border-b-8 border-gray-200 cursor-pointer"
        onClick={() => navigate("/user-profile/bio", { replace: true })}
      >
        <img
          src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
          alt="profile_pict"
          className="w-11 h-11 object-cover rounded-full"
        />
        <div>
          <div className="font-semibold text-sm ml-2">James Adam</div>
          <div className="text-xs text-gray-500 ml-2">Pengguna</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-sm font-semibold py-2 px-5">Menu</div>
        {userStatus === 1
          ? staticConst.profile_menu.user.map((el, index) => (
              <div
                className="text-sm py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                key={index}
              >
                <div
                  className="px-7"
                  onClick={() => navigate(el.path, { replace: true })}
                >
                  {el.name}
                </div>
              </div>
            ))
          : staticConst.profile_menu.seller.map((el, index) => (
              <div
                className="text-sm py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                key={index}
              >
                <div
                  className="px-7"
                  onClick={() => navigate(el.path, { replace: true })}
                >
                  {el.name}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SideMenu;
