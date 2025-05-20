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
      setVets((prev) => (prev < 8 ? prev + 1 : 8));
      setSpecialties((prev) => (prev < 6 ? prev + 1 : 6));
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
                src="/vet-icon.png"
                alt="Veterinários"
                width={64}
                height={64}
              />
              <h3>{vets}</h3>
              <p>Veterinários</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/specialty-icon.png"
                alt="Especialidades"
                width={64}
                height={64}
              />
              <h3>{specialties}</h3>
              <p>Especialidades</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="box-st col-md-3 col-sm-12">
            <div className="p-4 rounded text-dark">
              <Image
                src="/tests-icon.png"
                alt="Exames"
                width={64}
                height={64}
              />
              <h3>{tests}</h3>
              <p>Exames</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
