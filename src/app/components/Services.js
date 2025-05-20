// components/Services.js
import React from "react";
import Image from "next/image";

const Services = () => (
  <section className="services">
    <h2>Nossos Serviços</h2>
    <div className="cardsGrid">
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

export default Services;
