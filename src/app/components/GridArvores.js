import Link from "next/link";
import Image from "next/image";
import { trees } from "@/app/data/trees";

export default function GridArvores() {
  return (
    <section className="py-5">
      <div className="container" id="arvores">
        <h2 className="text-center text-success mb-4">Nossas Árvores</h2>
        <div className="row g-4">
          {trees.map((tree) => (
            <div className="col-6  col-md-4 col-xs-12" key={tree.id}>
              <Link
                href={`/arvores/${tree.id}`}
                className="text-decoration-none"
              >
                <div className="card box-tree d-flex w-100 h-100 text-center">
                  <Image
                    src={tree.imagem}
                    alt={`Árvore ${tree.nome_popular}`}
                    width={400} 
                    height={300} 
                    className="card-img-top object-fit-cover img-fluid mx-auto mt-3"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ width: "100%", height: "auto" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title text-success">
                      {tree.nome_popular}
                    </h5>
                    <p className="card-text">
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
