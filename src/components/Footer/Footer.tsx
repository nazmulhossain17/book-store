import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer
      id="dark-theme"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12"
    >
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">SOLUTIONS</label>
          <ul className="flex flex-col gap-6 ">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">SUPPORT</label>
          <ul className="flex flex-col gap-6">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">COMPANY</label>
          <ul className="flex flex-col gap-6 ">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">SUPPORT</label>
          <ul className="flex flex-col gap-6 ">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="text-gray-300">
            The latest news, article, resources, sent to your inbox weekly
          </p>
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
          <input
            className="px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
            placeholder="Enter your email"
            type="text"
          />
          <button className="px-6 py-4 font-semibold bg-purple-500 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between ">
        <div>&#169; 2024 Syed Nazmul Hossain</div>
      </div>
    </footer>
  );
};

export default Footer;
