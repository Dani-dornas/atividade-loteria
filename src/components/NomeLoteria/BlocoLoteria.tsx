import styled from "styled-components";

export const BlocoLoteria = ({children}:any) => {
  const Style = styled.div`
    display: flex;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
