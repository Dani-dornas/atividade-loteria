import styled from "styled-components";

export const Carregando = () => {

  const Style = styled.div`
    display: flex;
    flex-direction: colum;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  `;

  const H3 = styled.h3``;

  return (
    <style>
      <H3>Carregando...</H3>
    </style>
  );
};
