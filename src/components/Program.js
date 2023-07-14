import React from "react";

// import icons
import PhoneIcon from "../assets/img/phone.svg";

const Program = () => {
  return (
    <div>
      {/* Phone Icon & Phone number */}
      <div className="flex lg:gap-x-10 items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
          src={PhoneIcon}
          alt="Phone number"
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
          + 90 000 000 00 00
        </div>
      </div>
      {/* Open Hours */}
      <div className="text-sm">
        {/* Show only in desktop mode */}
        <div className="hidden lg:flex">
          Opening Hours: Mon - Sun: 10am - 6pm
        </div>
        {/* Show only in mobile mode */}
        <div className="lg:hidden text-right">Mon - Sun: 10am - 6pm</div>
      </div>
    </div>
  );
};

export default Program;
