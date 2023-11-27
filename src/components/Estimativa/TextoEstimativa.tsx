import styled from "styled-components";

export const TextoEstimativa = ({children}:any) => {

  const Style = styled.div`
    font-size: 15px;
    color: #4c556c;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
