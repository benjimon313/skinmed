import React from "react";
import { useRecoilState } from "recoil";
import { activeUserState } from "../Atoms/userAtom";
import "./Button.css";

export function Button() {
  const [activeUser, setActiveUser] = useRecoilState(activeUserState);
  return (
    <button className="btn" onClick={() => setActiveUser(null)}>
      Cerrar Sesion
    </button>
  );
}
