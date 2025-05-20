import React from "react";

const Footer = () => (
  <footer className="footer text-center pt-5 pb-5">
    <h3 className="txt-foo">Santa Raizes</h3>
    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    <div className="socialLinks d-flex justify-content-center">
      <div>
        <a href="#">Facebook</a>
      </div>
      <div>
        <a href="#">Instagram</a>
      </div>
      <div>
        <a href="#">WhatsApp</a>
      </div>
    </div>
  </footer>
);

export default Footer;
