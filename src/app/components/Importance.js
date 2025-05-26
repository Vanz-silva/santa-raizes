"use client";
import React from "react";
import Lottie from "lottie-react";
import qrAnimation from "@/app/data/lotties/qr-animation.json";

const Importance = () => (
  <section className="importance pt-5 pb-5 mt-5 mb-5">
    <div className="container d-flex justify-content-center flex-column text-center">
      <h2>Escaneei os QR Codes das Árvores do Parque</h2>
      <p>
        Basta apontar o celular para o QR Code e a árvore se revela na tela com
        informações ricas e visuais, criando uma experiência interativa que
        aproxima o público da natureza. É uma forma moderna, acessível e
        sustentável de explorar a biodiversidade local.
      </p>
    </div>
    {/* QR + Fontes lado a lado */}
    <div className="d-flex justify-content-center g-5 align-items-start mt-5 gap-5 flex-wrap">
      {/* Lottie QR Animation */}
      <div style={{ width: 200, height: 200, backgroundColor: "#f8f9fad9" }}>
        <Lottie animationData={qrAnimation} />
      </div>

      {/* Fontes de Pesquisa */}
      <div className="text-center">
        <h5 className="mb-3" style={{ color: "#fff" }}>
          Fontes de Pesquisa
        </h5>
        <ul className="list-unstyled">
          <li>
            <a
              href="https://mapaagro.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mapaagro.com.br/
            </a>
          </li>
          <li>
            <a
              href="https://www.terra.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.terra.com.br/
            </a>
          </li>
          <li>
            <a
              href="https://www.esalq.usp.br/trilhas/fruti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.esalq.usp.br/trilhas/fruti/
            </a>
          </li>
          <li>
            <a
              href="https://reflora.jbrj.gov.br/reflora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://reflora.jbrj.gov.br/reflora/
            </a>
          </li>
          <li>
            <a
              href="https://caliandradocerradogo.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://caliandradocerradogo.blogspot.com/
            </a>
          </li>
          <li>
            <a
              href="https://infoteca.cnptia.embrapa.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://infoteca.cnptia.embrapa.br/
            </a>
          </li>
          <li>
            <a
              href="https://pt.wikipedia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pt.wikipedia.org/
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Importance;
