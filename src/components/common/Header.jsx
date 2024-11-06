import React from "react";
import { FaHamburger } from "react-icons/fa";
import IconWrapper from "./IconWrapper";
import Btn from "./Btn";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="h-[83px] flex-join px-4">
      <div className="w-full flex-apart">
        <div className="flex-apart gap-x-4">
          <IconWrapper containerStyle="size-[25px] border bg-orange-500 rounded-full" />

          <h2 className="text-2xl font-work_sans_sm">
            Airxistence <span className="text-base font-avenir">Dev</span>
          </h2>
        </div>

        <Btn
          icon={<FaHamburger width={22} height={20} />}
          styling="md:hidden"
        />

        <Nav />
      </div>
    </header>
  );
};

export default Header;
