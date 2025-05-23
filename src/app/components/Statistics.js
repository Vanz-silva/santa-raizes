"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Statistics = () => {
  const [vets, setVets] = useState(0);
  const [specialties, setSpecialties] = useState(0);
  const [tests, setTests] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVets((prev) => (prev < 20 ? prev + 1 : 20));
      setSpecialties((prev) => (prev < 74 ? prev + 1 : 74));
      setTests((prev) => (prev < 80 ? prev + 1 : 80));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="statistics py-5 pt-5 pb-5 mb-5">
      <div className="container">
        <div className="d-flex justify-content-center text-center gap-4 flex-wrap">
          {/* Box 1 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/qr.png"
                alt=""
                width={64}
                height={64}
                className="m-3"
              />
              <h2>{vets}</h2>
              <p>Qr Codes</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/terra.png"
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
                src="/icon-tree-2.png"
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
