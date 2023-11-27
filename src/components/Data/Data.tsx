import styled from "styled-components";
import useLoteria from "../../hooks/useLoteria";

export const Data = ({children}:any) => {
  const { megasena } = useLoteria();
  
  const Style = styled.div`
    margin-top: 15px;
    color: #4c556c;
    padding-left: 15px;
    font-size: 15px;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
