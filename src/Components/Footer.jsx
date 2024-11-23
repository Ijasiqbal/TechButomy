import React from "react";

const Footer = () => {
  return (
    <footer className=" py-10 px-20 pb-7 border border-gray-300 pr-40">
      <div className="container mx-auto px-4">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Funiro.</h2>
            <p className="text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold text-lg mb-10 text-[#9F9F9F] leading-[24px]">Links</h4>
            <ul className="space-y-10 leading-[24px]">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-bold text-lg mb-10 text-[#9F9F9F] leading-[24px]">Help</h4>
            <ul className=" space-y-10 leading-[24px]">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-[14px]">
            <h4 className="font-bold text-lg mb-8 text-[#9F9F9F] leading-[24px]">Newsletter</h4>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 pl-0 border-b border-black focus:outline-none focus:ring focus:ring-gray-400 mr-5"
              />
              <button className=" py-2 border-b border-black ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10  border-t border-gray-300 pt-7 text-gray-600">
          <p>2023 funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;