import React from "react";
import { FaHamburger } from "react-icons/fa";
import IconWrapper from "./IconWrapper";
import Btn from "./Btn";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="h-[83px] flex items-center normal-pad">
      <div className="w-full flex-apart">
        <div className="flex-apart gap-x-2">
          <Link to="/">
            <IconWrapper containerStyle="size-[25px] border bg-[var(--orange)] rounded-full" />
          </Link>

          <h2 className="text-[21px] font-work_sans_sm">
            Doris <span className="text-base font-avenir">Dev</span>
          </h2>
        </div>

        <MobileNav />

        <Nav />
      </div>
    </header>
  );
};

export default Header;
