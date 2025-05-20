// components/About.js
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPaw, FaEye, FaHeart } from "react-icons/fa";

const About = () => (
  <section className="py-5">
    <div className="container about  py-5 mt-5" style={{ width: "70%" }}>
      <div className="row linha-sobre align-items-center">
        {/* Coluna de texto */}
        <div className="col-md-6 col-sm-12 text-center">
          <h1>Sobre o projeto</h1>

          <h5>
            Santa Raízes é um projeto que une natureza e tecnologia para
            promover educação ambiental de forma interativa. Utilizando QR Codes
            fixados em árvores do Parque da Cidade, os visitantes acessam
            páginas digitais com informações sobre cada espécie — origem,
            benefícios e curiosidades.
          </h5>
        </div>
      </div>
    </div>
  </section>
);

export default About;
