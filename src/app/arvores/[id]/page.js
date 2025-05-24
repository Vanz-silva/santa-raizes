import { trees } from "@/app/data/trees";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default async function ArvorePage({ params }) {
  const { id } = await params;
  const arvore = trees.find((tree) => tree.id === Number(id));

  if (!arvore) return notFound();

  return (
    <div className="container  d-flex justify-content-center  py-5 px-3">
      <div className="row justify-content-center flex-column">
        <div className="col box-tree ">
          <h1 className="h2 text-center  mb-3">{arvore.nome_popular}</h1>
          <p className="mb-4 text-center">{arvore.nome_cientifico}</p>

          <div
            className="mb-4 position-relative"
            style={{ width: "100%", height: "600px" }}
          >
            <Image
              src={arvore.imagem}
              alt={`Imagem da árvore ${arvore.nome_popular}`}
              fill
              className="img-fluid rounded object-fit-cover"
              style={{ borderRadius: "12px" }}
            />
          </div>

          <ul className="list-group p-5 list-group-flush">
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
        <div className="text-center col mb-4 pt-5 pb-5">
          <Link href="/" className="btn w-100 btn-outline-success">
            <i className="bi bi-flower1 me-2"></i>Todas Árvores{" "}
            <FaLeaf size={18} className="mb-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
