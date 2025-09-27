import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#0D1224]  text-white pt-16 pb-10 ">
      {/* bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About Vayoo</a></li>
              <li><a href="#" className="hover:underline">Our Services</a></li>
              <li><a href="#" className="hover:underline">How it Works</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Ticket Cancellation</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Travel Tips</a></li>
              <li><a href="#" className="hover:underline">Bus Routes</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">YouTube Channel</a></li>
            </ul>
          </div>

          {/* App Store */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get the App</h4>
            <div className="space-y-4">
              <a
                href="#"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
              >
                Google Play Store
              </a>
              <a
                href="#"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
              >
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Vayoo. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
