import "./saludar.css";
import PropTypes from 'prop-types';

export function Saludar({ title, name = "User" }) {
  console.log(title, name);
  return (
    <section>
      <h2 className="titulos">
        Saludo {title} - {name}
      </h2>
    </section>
  );
}

Saludar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string
};

export function UserCard({ name, amount, married, address }) {
  return (
    <div className="contenedorFormulario">
      <div className="form-container">
        <div className="form-image">
        </div>
        <div className="form-content">
      <p className="nombre" >DANIEL MOREIRA</p>
          <h2 className="titulos">Iniciar Sesión</h2>
          <form>
            <fieldset>
              <p>
                <input
                  type="text"
                  name="username"
                  id="size_1"
                  placeholder="Email"
                />
              </p>
              <p>
                <input 
                 className="input"
                  type="password"
                  name="password"
                  id="size_2"
                  placeholder="Password"
                />
              </p>
              <p>
                <a className="recuperar" href="#">Olvidaaste la contraseña</a>
              </p>
              <p>
                <button type="submit" className="button">Ingresar</button>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
          
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  married: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
  })
};
