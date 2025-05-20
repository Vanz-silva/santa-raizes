import Link from "next/link";
import Image from "next/image";
import { trees } from "@/app/data/trees";

export default function GridArvores() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center text-success mb-4">Nossas Árvores</h2>
        <div className="row g-4">
          {trees.map((tree) => (
            <div className="col-6  col-md-3" key={tree.slug}>
              <Link
                href={`/arvores/${tree.slug}`}
                className="text-decoration-none"
              >
                <div className="card box-tree h-100 text-center">
                  <Image
                    src={tree.imagem}
                    alt={`Árvore ${tree.nome_popular}`}
                    width={120}
                    height={120}
                    className="card-img-top rounded-circle object-fit-cover mx-auto mt-3"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      {tree.nome_popular}
                    </h5>
                    <p className="card-text text-muted small fst-italic">
                      {tree.nome_cientifico}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
