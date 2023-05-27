import PropTypes from "prop-types";

function InputBox({ value, onChange, name, placeholder, htmlFor, label }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-black text-sm font-bold mb-1"
      >
        {label}
      </label>
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        id={htmlFor}
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
      />
    </div>
  );
}

InputBox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
