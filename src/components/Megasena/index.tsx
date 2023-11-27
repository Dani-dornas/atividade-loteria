import useLoteria from "../../hooks/useLoteria";
import trevo from "../../assets/trevo-megasena.png";
import { Carregando } from "../Carregando/Carregando";
import { Principal } from "../Principal/Principal";
import { Esquerda } from "../Esquerda/Esquerda";
import { Direita } from "../Direita/Direita";
import { BlocoLoteria } from "../NomeLoteria/BlocoLoteria";
import { Estimativa } from "../Estimativa/Estimativa";
import { Resultado } from "../Resultado/Resultado";
import { Acumulou } from "../Acumulou/Acumulou";
import { Data } from "../Data/Data";
import { NomeLoteria } from "../NomeLoteria/NomeLoteria";
import { TextoEstimativa } from "../Estimativa/TextoEstimativa";
import { ValorEstimativa } from "../Estimativa/ValorEstimativa";

export default function Megasena() {
  const { megasena: sorteio } = useLoteria();

  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <BlocoLoteria>
              <img src={trevo} alt="trevo" />
              <NomeLoteria>MEGA-SENA</NomeLoteria>
            </BlocoLoteria>
            <Estimativa>
              <TextoEstimativa>
                Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                {sorteio.dataProximoConcurso}:
              </TextoEstimativa>
              <ValorEstimativa>
                {sorteio.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ValorEstimativa>
            </Estimativa>
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou>
              {sorteio.quantidadeGanhadores === 0
                ? "ACUMULOU!"
                : `${sorteio.quantidadeGanhadores} GANHADORES`}
            </Acumulou>
            <Data>
              {`Concurso ${sorteio.numeroDoConcurso} - ${sorteio.dataPorExtenso}`}
            </Data>
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
