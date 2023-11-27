import { Route, Routes } from "react-router-dom";
import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import { ThemeProvider } from "styled-components";
import useLoteria from "../hooks/useLoteria";
import TimeMania from "../components/TimeMania";

export default function AppRoutes() {
  const { tema } = useLoteria();

  return (
    <ThemeProvider theme={tema}>
      <Routes>
        <Route path="/megasena" element={<Megasena />} />
        <Route path="/timemania" element={<TimeMania />} />
        <Route path="/quina" element={<Quina />} />
      </Routes>
    </ThemeProvider>
  );
}
