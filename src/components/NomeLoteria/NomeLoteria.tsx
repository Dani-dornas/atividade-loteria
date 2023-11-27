import styled from "styled-components";

export const NomeLoteria = ({children}:any) => {


  const Style = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: ${ props => props.theme.loteria};
    margin-left: 10px;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
