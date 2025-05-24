"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carousel = document.querySelector("#carouselBanner");
      if (carousel && bootstrap?.Carousel) {
        new bootstrap.Carousel(carousel, {
          interval: 3000,
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      }
    });
  }, []);

  return (
    <section className="banner pt-4 pb-4" style={{ height: "80vh", overflow: "hidden" }}>
      <div
        id="carouselBanner"
        className="carousel slide carousel-fade box-st h-100"
        style={{ width: "86%", margin: "0 auto", padding: "0", }}
      >
        <div className="carousel-inner h-100 w-100">
          {/* Slide 1 */}
          <div className="carousel-item active position-relative h-100">
            <Image
              src="/santa-raizes/carousel-1.jpg"
              alt="Imagem 1"
              layout="fill"
              className="object-fit-cover"
              priority
              style={{ borderRadius: "24px"}}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-3 fw-bold">Primeiro Slide</h1>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative h-100">
            <Image
              src="/santa-raizes/carousel-2.jpg"
              alt="Imagem 2"
              layout="fill"
              className="object-fit-cover"
              style={{ borderRadius: "24px"}}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-3 fw-bold">Segundo Slide</h1>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative h-100">
            <Image
              src="/santa-raizes/carousel-3.jpg"
              alt="Imagem 3"
              layout="fill"
              className="object-fit-cover"
              style={{ borderRadius: "24px"}}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className="display-3 fw-bold">Terceiro Slide</h1>
            </div>
          </div>
        </div>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselBanner"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselBanner"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselBanner"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
