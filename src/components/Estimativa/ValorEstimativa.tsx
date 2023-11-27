import styled from "styled-components";

export const ValorEstimativa = ({children}:any) => {


  const Style = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: ${ props => props.theme.estimativa};
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
