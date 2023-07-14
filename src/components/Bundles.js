import React from "react";

// import icons
import { BsCheckCircleFill } from "react-icons/bs";

const Bundles = ({ bundles }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-[30px]">
      {bundles.map((bundle, index) => {
        const { name, price, list } = bundle;
        return (
          <div
            className="w-full lg:max-w-1/3 bg-white shadow-primary rounded-[60px] py-12 px-8 text-center h-[560px]"
            key={index}
          >
            {/* price */}
            <div className="text-5xl font-bold text-blue mb-4">$ {price}</div>
            {/* Name */}
            <div className="capitalize text-blue mb-12 font-medium">{name}</div>
            {/* List */}
            <div className="flex flex-col gap-y-4 max-w-[230px] mx-auto">
              {list.map((item, index) => {
                return (
                  <div className="flex items-center gap-x-3" key={index}>
                    <BsCheckCircleFill className="text-red text-xl" />
                    <div className="capitalize"> {item} </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bundles;
