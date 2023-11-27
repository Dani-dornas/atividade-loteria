import styled from "styled-components";

export const Estimativa = ({children}:any) => {


  const Style = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
  `;

  const TextoEstimativa = styled.div`
    font-size: 15px;
    color: #4c556c;
  `;

  const ValorEstimativa = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
