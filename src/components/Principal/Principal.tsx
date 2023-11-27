import styled from "styled-components";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement>{}

export const Principal = ({children}:any) => {

  const Style = styled.div`
    display: flex;
    margin-top: 15px;
    font-family: roboto;
    border-bottom: 1px solid #ddd;
  `;

  return (
    <Style>
      {children}
    </Style>
  );
};
