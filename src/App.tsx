import { Route, Routes } from "react-router-dom";
import Lotofacil from "./components/Lotofacil";
import Megasena from "./components/Megasena";
import Quina from "./components/Quina";
import Principal from "./pages/Principal";

export default function App() {
  return (
    <Routes>
      <Route path="/megasena" element={<Megasena />} />
      <Route path="/lotofacil" element={<Lotofacil />} />
      <Route path="/quina" element={<Quina />} />
    </Routes>
  );
}
