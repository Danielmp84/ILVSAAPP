import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./componets/Saludar";
import { Button } from "./componets/Button";
import { Cabecera, SliderPrincipal } from "./componets/Cabecera";

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<h1>Hola mundo</h1>);
root.render(
  <>
    <Cabecera />
    <SliderPrincipal />
    <UserCard
     
    />

  
  </>
);
