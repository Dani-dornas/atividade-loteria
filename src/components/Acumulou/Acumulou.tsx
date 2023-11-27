import styled from "styled-components";

export const Acumulou = ({children}:any) => {
  
  const Style = styled.div`
    font-size: 28px;
    font-weight: bold;
    color:  ${ props => props.theme.acumulou};
    margin-top: 15px;
    padding-left: 15px;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
