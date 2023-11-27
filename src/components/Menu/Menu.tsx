import { Link } from "react-router-dom";
import useLoteria from "../../hooks/useLoteria";
import "./index.css";
import { mega, quina, timemania } from "../../styles/theme";

export default function Menu() {
  const { ativo, setAtivo, setTema } = useLoteria();

  return (
    <div className="principal-bloco">
      <Link
        onClick={() => {
          setAtivo("megasena");
          setTema(mega);
        }}
        to="/megasena"
        className={ativo === "megasena" ? "button ativo" : "button mega"}
      >
        Mega-Sena
      </Link>
      <Link
        onClick={() => {
          setAtivo("timemania");
          setTema(timemania);
        }}
        to="/timemania"
        className={ativo === "timemania" ? "button ativo" : "button loto"}
      >
        TimeMania
      </Link>
      <Link
        onClick={() => {
          setAtivo("quina");
          setTema(quina);
        }}
        to="/quina"
        className={ativo === "quina" ? "button ativo" : "button quina"}
      >
        Quina
      </Link>
    </div>
  );
}
