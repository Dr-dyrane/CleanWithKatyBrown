import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ disabled }) => {
  const logoContent = (
    <>
      <img
        src="/logo_t.png"
        className="h-8 rounded-full bg-white p-[1px]"
        alt="clean with kb Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-100">
        Clean With Katy Brown ™
      </span>
    </>
  );

  return disabled ? (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </div>
  ) : (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </Link>
  );
};

export default Logo;
