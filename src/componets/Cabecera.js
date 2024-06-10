import "./cabecera.css";

export function Cabecera() {
  return (
    <div className="contenedorCabecera">
      <header className="cabeceraPrincipal">
        <h1>Instituto de la Vision ILVSA</h1>
        <nav className="menuPrincipal">
          <a href="#">Inicio</a>
          <a href="#">Servicios Oftalmológicos</a>
          <a href="#">Cirugías</a>
          <a href="#">Equipamiento Tecnológico</a>
          <a href="#">Equipo Médico Especializado</a>
          <a href="#">Atención al Cliente</a>
          <a href="#">Finanzas y Administración</a>
          <a href="#">Marketing y Promoción</a>
        </nav>
      </header>
    </div>
  );
}

export function SliderPrincipal() {
  return (
    <div className="sliderPrinipal">
      <img
        src="https://static.wixstatic.com/media/8e83eb_7be9b74536c84791bc9e7970d4f70bb4~mv2.jpg/v1/fill/w_1446,h_586,al_c,q_85,enc_auto/8e83eb_7be9b74536c84791bc9e7970d4f70bb4~mv2.jpg"
        alt="Slider principal"
      ></img>
    </div>
  );
}
