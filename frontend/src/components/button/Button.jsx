import "./button.scss";
import PropTypes from "prop-types";

function Button({ label, type, handleClick, isSubmitting }) {
  return (
    <div className='button__container'>
      <button
        className='button'
        type={type}
        onClick={handleClick}
        disabled={isSubmitting}
      >
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default Button;
