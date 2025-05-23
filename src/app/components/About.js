// components/About.js
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPaw, FaEye, FaHeart } from "react-icons/fa";

const About = () => (
  <section className="pt-5 mt-5">
    <div
      className="container about  py-5 mt-5 pt-5 mb-5"
      style={{ width: "70%" }}
    >
      <div className="row linha-sobre align-items-center">
        {/* Coluna de texto */}
        <div className="col-md-8 col-sm-12 text-center">
          <h1>Sobre o projeto</h1>

          <h5>
            O Santa Raízes é um projeto que une natureza e tecnologia para
            transformar sua caminhada no parque da Santa Maria -DF em uma jornada de aprendizado
            ambiental. Por meio de QR Codes instalados em árvores do Parque da
            Cidade, você pode acessar páginas digitais exclusivas com
            informações sobre cada espécie — sua origem, benefícios para o meio
            ambiente e curiosidades surpreendentes. Faça uma visita ao parque,
            escaneie os códigos com seu celular e descubra como cada árvore
            conta uma história.
          </h5>
        </div>
      </div>
    </div>
  </section>
);

export default About;
