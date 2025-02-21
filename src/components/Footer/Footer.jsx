import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'

const FooterLinks = [
  { title: 'MEN' },
  { title: 'WOMEN' },
  { title: 'KIDS' },
  { title: 'CONTACT' },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <FiShoppingBag size={30} />  BRINED'CLOTH
          </h1>
          <p className="text-gray-400 text-sm">
            Your go-to online store for the best deals and quality products.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-primary transition-all"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt /> Indore, Madhya Pradesh
          </p>
          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <FaPhoneAlt /> +91 123456789
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-2xl text-gray-400 hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl text-gray-400 hover:text-primary">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl text-gray-400 hover:text-primary">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} BRINED'CLOTH. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
