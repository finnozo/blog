import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-200 text-center">
      <h1 className="text-[14px] p-10">
        Need help? Email dangi.sushil5@gmail.com<br></br>
        Copyright © {currentYear} SushilDangi
      </h1>
    </div>
  );
};

export default Footer;
