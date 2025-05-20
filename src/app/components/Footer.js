import React from "react";

const Footer = () => (
  <footer className="footer">
    <h3>Mirai Pet</h3>
    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    <div className="socialLinks">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">WhatsApp</a>
    </div>
  </footer>
);

export default Footer;
