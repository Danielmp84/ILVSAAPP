import "./saludar.css";

export function Saludar({ title, name = "User" }) {
  console.log(title, name);
  return (
    <section>
      <h2 className="titulos">
        Saludo {title} - {name}
      </h2>
      <p>Esta es la informacion de la noticia</p>
    </section>
  );
}

export function UserCard({ name, amount, married, address }) {
  //console.log(props);
  return (
    <div className="contenedorFormulario">
      <h2 className="titulos">{name}</h2>
      <p>{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <form>
        <fieldset>
          <legend className="leyenda">Formulario de registro al sistema</legend>
          <p>
            <input
              type="text"
              name="size"
              id="size_1"
              placeholder="Ingrese el usuario"
            />
            <label for="size_1">Pequeño</label>
          </p>
          <p>
            <input
              type="password"
              name="size"
              id="size_2"
              placeholder="Ingrese la clave"
            />
            <label for="size_2">Mediano</label>
          </p>
          <p>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </p>
          <p>
            <button className="button negro">INGRESAR</button>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
