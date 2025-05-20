// components/Services.js
import React from "react";
import Image from "next/image";

const GridArvores = () => (
  <section className="services">
    <h2 className="py-5">Nossas Árvores</h2>
    <div className="cardsGrid pt-2 pb-2 p-0">
      {[...Array(20)].map((_, index) => (
        <div className="card" key={index}>
          <Image
            src={`/service-icon-${index + 1}.png`}
            alt={`Serviço ${index + 1}`}
            width={64}
            height={64}
          />
          <p>Especialidade {index + 1}</p>
        </div>
      ))}
    </div>
  </section>
);

export default GridArvores;
