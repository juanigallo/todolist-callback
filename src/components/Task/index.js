function Task(props) {
  function handleClick() {
    const { handleDelete, position } = props;
    handleDelete(position);
  }

  return (
    <li>
      {props.value} - {props.position}
      <button onClick={handleClick}>Borrar</button>
    </li>
  );
}

export default Task;
