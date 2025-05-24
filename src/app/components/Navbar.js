"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="d-flex text-center align-items-center">
          <div>
            <Image
              src="/santa-raizes/planta.png"
              alt="Exames"
              width={40}
              height={40}
              className="m-3"
            />
          </div>
          <div>
            <a className="navbar-brand" href="#">
              Santa Raizes
            </a>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-link" href={`${pathname}#arvores`}>
                Árvores
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="https://wa.me/5561988894994"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
