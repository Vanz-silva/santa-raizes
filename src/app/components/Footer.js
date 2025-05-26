import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="footer text-center pt-5 pb-5">
    <h3 className="txt-foo">Santa Raízes</h3>

   
    <p className="p-3">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
