import styled from "styled-components";
import useLoteria from "../../hooks/useLoteria";

interface Props{
  dezenas: string[];
}

export const Resultado = ({dezenas}:Props) => {
  const { megasena } = useLoteria();

  const Style = styled.div`
    display: flex;
  `;

  const MegaBola = styled.div`
    font-size: 18px;
    font-weight: bold;
    background-color: ${ props => props.theme.bola};
    color:  ${ props => props.theme.bolafonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
  `;

  return (
    <Style>
      {dezenas.map((dezena) => (
        <MegaBola key={dezena}>
          {dezena}
        </MegaBola>
      ))}
    </Style>
  );
};
