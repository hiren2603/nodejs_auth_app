import PropTypes from "prop-types";
import "./input.css";
function InputField({ type, name, label, value, handleChange, error }) {
  return (
    <div className='input__container'>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete='on'
      />
      <p className='error'>{error}</p>
    </div>
  );
}

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};
