import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import esLocale from "date-fns/locale/es";
import "./App.css";
import { RecoilRoot } from "recoil";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Principal from "./Components/Pages/Principal";

function App() {

  return (
    <LocalizationProvider locale={esLocale} dateAdapter={AdapterDateFns}>
      <RecoilRoot>
        <Principal />
      </RecoilRoot>
    </LocalizationProvider>
  );
}

export default App;
