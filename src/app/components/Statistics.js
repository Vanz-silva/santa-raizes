"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Statistics = () => {
  const [qr, setQr] = useState(0);
  const [specialties, setSpecialties] = useState(0);
  const [tests, setTests] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Observer: Detecta se o componente está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // ativa quando 50% da seção estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Efeito: Conta quando visível, reseta quando some
  useEffect(() => {
    let interval;

    if (isVisible) {
      interval = setInterval(() => {
        setQr((prev) => (prev < 10 ? prev + 1 : 10));
        setSpecialties((prev) => (prev < 36 ? prev + 1 : 36));
        setTests((prev) => (prev < 43 ? prev + 1 : 43));
      }, 100);
    } else {
      setQr(0);
      setSpecialties(0);
      setTests(0);
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="statistics py-5 pt-5 pb-5 mb-5" ref={ref}>
      <div className="container">
        <div className="d-flex justify-content-center text-center gap-4 flex-wrap">
          {/* Box 1 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/santa-raizes/qr.png"
                alt=""
                width={64}
                height={64}
                className="m-3"
              />
              <h2>{qr}</h2>
              <p>Qr Codes</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/santa-raizes/terra.png"
                alt=""
                width={64}
                height={64}
                className="m-3"
              />
              <h2>{tests}</h2>
              <p>Árvores</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/santa-raizes/icon-tree-2.png"
                alt="Especialidades"
                width={64}
                height={64}
                className="m-3"
              />
              <h2>{specialties}</h2>
              <p>Espécies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
