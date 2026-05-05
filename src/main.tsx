import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerLocale } from "react-datepicker";
import { tr } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import App from "./App";

registerLocale("tr", tr);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
