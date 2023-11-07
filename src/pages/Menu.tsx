import { Link } from "react-router-dom";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Menu() {
  const {ativo, setAtivo} = useLoteria();


  return (
    <div className="principal-bloco">
      <Link 
        onClick={() => setAtivo("megasena")}  
        to="/megasena" 
        className={ativo === "megasena" ? "button ativo" : "button mega"}>
        Mega-Sena
      </Link>
      <Link 
        onClick={() => setAtivo("lotofacil")}  
        to="/lotofacil" 
        className={ativo === "lotofacil" ? "button ativo" : "button loto"}>
        Loto-Fácil
      </Link>
      <Link 
      onClick={() => setAtivo("quina")}  
      to="/quina" 
      className={ativo === "quina" ? "button ativo" : "button quina"}>
        Quina
      </Link>
    </div>
  );
}