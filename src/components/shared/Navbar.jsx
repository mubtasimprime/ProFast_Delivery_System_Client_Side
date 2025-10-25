import React from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink>Pricing</NavLink>
      </li>
      <li>
        <NavLink>Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white px-8 py-5 shadow-sm rounded-2xl">
      {/* Mobile Screen */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content primary-gray font-medium rounded-box z-1 mt-3 w-52 p-2 shadow text-base"
          >
            {navItems}
          </ul>
        </div>
        <NavLink className="dark-text text-[32px] font-extrabold flex relative">
          <img src={Logo} alt="logo" />
          <div className="absolute ml-5 mt-3 ">Profast</div>
        </NavLink>
      </div>

      {/* Big Screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 primary-gray gap-8 font-medium text-base">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <NavLink
          className="text-[#606060] py-3 px-8 border border-gray-300 rounded-xl font-bold text-[20px] hover:bg-[#caeb66] transition duration-300 hover:border-[#caeb66] hover:text-[#303030]"
          to="/login"
        >
          Sign In
        </NavLink>
        <NavLink
          className="py-3 px-8 border bg-[#caeb66] rounded-xl font-bold text-[20px] text-[#303030] outline-none border-[#caeb66] hover:border-[#c7c2c2] hover:bg-white hover:text-[#606060] transition duration-300"
          to="/register"
        >
          Be a rider
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
