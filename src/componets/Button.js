import PropTypes from "prop-types";
export function Button({ text, name = "User" }) {
  return (
    <button>
      {text}- {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
