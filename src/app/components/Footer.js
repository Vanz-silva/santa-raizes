import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="footer text-center pt-5 pb-5">
    <h3 className="txt-foo">Santa Raízes</h3>
    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    <div className="socialLinks d-flex justify-content-center gap-4 mt-3">
      <a
        className="social-icon"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        className="social-icon"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        className="social-icon"
        href="https://wa.me/5561988894994"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
