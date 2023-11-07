import { useLoteria } from "../hooks";
import "./index.css";
import Menu from "./Menu";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <Menu />
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
