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
      name="Daniel Moreira"
      amount={500}
      married={true}
      points={[99, 33.3, 18, 36.8]}
      address={{ street: "Av.10 adosto", city: "Loja" }}
    />

    <Button text="Aceptar" name="Manuel" />
    <Button text="Regresar" name="Diego" />
    <Button text="Pagar" />
    <Button text="Recuperar" name="Ramiro" />
  </>
);
