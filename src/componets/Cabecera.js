import "./cabecera.css";

import React, { useState } from 'react';


export function Cabecera() {
  const [dropdownOpen, setDropdownOpen] = useState({
    servicios: false,
    cirugias: false,
    equipamiento: false,
    equipoMedico: false,
    atencion: false,
    gestionCalidad: false,
    finanzas: false,
    infraestructura: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: !dropdownOpen[menu] });
  };

  return (
    <div className="contenedorCabecera">
      <header className="cabeceraPrincipal">
      <div className="header-logo">
          <img src="../logo.png" alt="Slider principal" ></img>
        </div>
        <nav className="menuPrincipal">
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("servicios")}
            onMouseLeave={() => toggleDropdown("servicios")}
          >
            <a href="#">Servicios Oftalmológicos</a>
            {dropdownOpen.servicios && (
              <div className="dropdownMenu">
                <a href="#">Consultas de rutina</a>
                <a href="#">Exámenes de Oftalmología</a>
                <a href="#">Tratamientos médicos y quirúrgicos</a>
                <a href="#">Tratamientos para enfermedades oculares</a>
                <a href="#">Terapia visual</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("cirugias")}
            onMouseLeave={() => toggleDropdown("cirugias")}
          >
            <a href="#">Cirugías</a>
            {dropdownOpen.cirugias && (
              <div className="dropdownMenu">
                <a href="#">Procedimientos quirúrgicos especializados</a>
                <a href="#">Cirugía de cataratas</a>
                <a href="#">Cirugía refractiva</a>
                <a href="#">Cirugía de glaucoma</a>
                <a href="#">Cirugía de retina</a>
                <a href="#">Cirugía de estrabismo</a>
                <a href="#">Cirugía reconstructiva</a>
                <a href="#">Cirugía reconstructiva de la córnea</a>
                <a href="#">Cirugía de párpados</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("equipamiento")}
            onMouseLeave={() => toggleDropdown("equipamiento")}
          >
            <a href="#">Equipamiento Tecnológico</a>
            {dropdownOpen.equipamiento && (
              <div className="dropdownMenu">
                <a href="#">Equipos de diagnóstico de última generación</a>
                <a href="#">Instrumentación quirúrgica especializada</a>
                <a href="#">Sistemas de registro y gestión de datos de pacientes</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("equipoMedico")}
            onMouseLeave={() => toggleDropdown("equipoMedico")}
          >
            <a href="#">Equipo Médico Especializado</a>
            {dropdownOpen.equipoMedico && (
              <div className="dropdownMenu">
                <a href="#">Oftalmólogos con diversas especialidades</a>
                <a href="#">Optometristas</a>
                <a href="#">Enfermeras oftalmológicas</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("atencion")}
            onMouseLeave={() => toggleDropdown("atencion")}
          >
            <a href="#">Atención al Cliente</a>
            {dropdownOpen.atencion && (
              <div className="dropdownMenu">
                <a href="#">Programación de citas eficiente</a>
                <a href="#">Atención personalizada</a>
                <a href="#">Educación al paciente sobre su salud ocular</a>
                <a href="#">Seguimiento postoperatorio</a>
              </div>
            )}
          </div>
  
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("gestionCalidad")}
            onMouseLeave={() => toggleDropdown("gestionCalidad")}
          >
            <a href="#">Gestión de Calidad</a>
            {dropdownOpen.gestionCalidad && (
              <div className="dropdownMenu">
                <a href="#">Cumplimiento de estándares médicos y regulatorios</a>
                <a href="#">Protocolos de higiene y seguridad</a>
                <a href="#">Encuestas de satisfacción del paciente y retroalimentación</a>
                <a href="#">Capacitación al personal</a>
              </div>
            )}
          </div>
        
        </nav>
      </header>
    </div>
  );
}
/*export function Cabecera() {
  const [dropdownOpen, setDropdownOpen] = useState({
    servicios: false,
    cirugias: false,
    equipamiento: false,
    equipoMedico: false,
    atencion: false,
    redRemision: false,
    gestionCalidad: false,
    finanzas: false,
    infraestructura: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: !dropdownOpen[menu] });
  };

  return (
    <div className="contenedorCabecera">
      <header className="cabeceraPrincipal">
        <h1>Instituto de la Vision ILVSA</h1>
        <nav className="menuPrincipal">
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("servicios")}
            onMouseLeave={() => toggleDropdown("servicios")}
          >
            <a href="#">Servicios Oftalmológicos</a>
            {dropdownOpen.servicios && (
              <div className="dropdownMenu">
                <a href="#">Consultas de rutina</a>
                <a href="#">Exámenes de Oftalmología</a>
                <a href="#">Tratamientos médicos y quirúrgicos</a>
                <a href="#">Tratamientos para enfermedades oculares</a>
                <a href="#">Terapia visual</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("cirugias")}
            onMouseLeave={() => toggleDropdown("cirugias")}
          >
            <a href="#">Cirugías</a>
            {dropdownOpen.cirugias && (
              <div className="dropdownMenu">
                <a href="#">Procedimientos quirúrgicos especializados</a>
                <a href="#">Cirugía de cataratas</a>
                <a href="#">Cirugía refractiva</a>
                <a href="#">Cirugía de glaucoma</a>
                <a href="#">Cirugía de retina</a>
                <a href="#">Cirugía de estrabismo</a>
                <a href="#">Cirugía reconstructiva</a>
                <a href="#">Cirugía reconstructiva de la córnea</a>
                <a href="#">Cirugía de párpados</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("equipamiento")}
            onMouseLeave={() => toggleDropdown("equipamiento")}
          >
            <a href="#">Equipamiento Tecnológico</a>
            {dropdownOpen.equipamiento && (
              <div className="dropdownMenu">
                <a href="#">Equipos de diagnóstico de última generación</a>
                <a href="#">Instrumentación quirúrgica especializada</a>
                <a href="#">Sistemas de registro y gestión de datos de pacientes</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("equipoMedico")}
            onMouseLeave={() => toggleDropdown("equipoMedico")}
          >
            <a href="#">Equipo Médico Especializado</a>
            {dropdownOpen.equipoMedico && (
              <div className="dropdownMenu">
                <a href="#">Oftalmólogos con diversas especialidades</a>
                <a href="#">Optometristas</a>
                <a href="#">Enfermeras oftalmológicas</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("atencion")}
            onMouseLeave={() => toggleDropdown("atencion")}
          >
            <a href="#">Atención al Cliente</a>
            {dropdownOpen.atencion && (
              <div className="dropdownMenu">
                <a href="#">Programación de citas eficiente</a>
                <a href="#">Atención personalizada</a>
                <a href="#">Educación al paciente sobre su salud ocular</a>
                <a href="#">Seguimiento postoperatorio</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("redRemision")}
            onMouseLeave={() => toggleDropdown("redRemision")}
          >
            <a href="#">Red de Remisión y Convenios</a>
            {dropdownOpen.redRemision && (
              <div className="dropdownMenu">
                <a href="#">Relaciones con médicos generales y especialistas para referencias</a>
                <a href="#">Colaboraciones</a>
                <a href="#">Documentación y planillaje</a>
                <a href="#">Cartera de Convenios IESS MSP</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("gestionCalidad")}
            onMouseLeave={() => toggleDropdown("gestionCalidad")}
          >
            <a href="#">Gestión de Calidad</a>
            {dropdownOpen.gestionCalidad && (
              <div className="dropdownMenu">
                <a href="#">Cumplimiento de estándares médicos y regulatorios</a>
                <a href="#">Protocolos de higiene y seguridad</a>
                <a href="#">Encuestas de satisfacción del paciente y retroalimentación</a>
                <a href="#">Capacitación al personal</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("finanzas")}
            onMouseLeave={() => toggleDropdown("finanzas")}
          >
            <a href="#">Finanzas y Administración</a>
            {dropdownOpen.finanzas && (
              <div className="dropdownMenu">
                <a href="#">Gestión de costos y presupuestos</a>
                <a href="#">Facturación y gestión de seguros</a>
                <a href="#">Administración de recursos humanos</a>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("infraestructura")}
            onMouseLeave={() => toggleDropdown("infraestructura")}
          >
            <a href="#">Infraestructura Física</a>
            {dropdownOpen.infraestructura && (
              <div className="dropdownMenu">
                <a href="#">Instalaciones modernas y confortables</a>
                <a href="#">Tecnología de punta en quirófanos y salas de consulta</a>
                <a href="#">Accesibilidad para personas con discapacidades</a>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}*/




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
