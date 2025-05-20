import { trees } from "@/app/data/trees";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ArvorePage({ params }) {
  const arvore = trees.find((tree) => tree.slug === params.slug);

  if (!arvore) return notFound();

  return (
    <div className="container box-tree d-flex justify-content-center py-5 px-3">
      <div className="row ">
        <div className="col-10 ">
          <h1 className="h2 text-success mb-3">{arvore.nome_popular}</h1>
          <p className="mb-4">{arvore.nome_cientifico}</p>

          <div className="mb-4">
            <Image
              src={arvore.imagem}
              alt={`Imagem da árvore ${arvore.nome_popular}`}
              width={800}
              height={450}
              className="img-fluid rounded"
            />
          </div>

          <ul className="list-group list-group-flush">
            <li className="">
              <h5>
                <strong>Idade:</strong> {arvore.idade}
              </h5>
            </li>
            <li className="">
              <h5>
                <strong>Benefícios para o solo:</strong> {arvore.beneficios}
              </h5>
            </li>
            <li className="">
              <h5>
                <strong>Curiosidades:</strong> {arvore.curiosidades}
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
