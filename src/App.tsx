import styled from "styled-components";
import Menu from "./components/Menu/Menu";
import AppRoutes from "./routes/Routes";

export default function App() {
  const Style = styled.div``;

  return (
    <Style>
      <Menu />
      <AppRoutes />
    </Style>
  );
}
