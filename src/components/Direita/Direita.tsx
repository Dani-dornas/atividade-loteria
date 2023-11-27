import styled from "styled-components";

export const Direita = ({children}:any) => {

    const Style = styled.div`
        margin-left: 50px;
    `;
  
    return (
      <Style>
        {children}
      </Style>
    );
  };
  