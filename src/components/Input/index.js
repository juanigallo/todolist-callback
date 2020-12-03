function Input(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.onChange(value);
  }

  function handleKeyDown(e) {
    const { keyCode } = e;
    props.onKeyDown(keyCode);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      value={props.value}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Input;
