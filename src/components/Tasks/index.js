import Task from "../Task";

function Tasks(props) {
  function onDelete(position) {
    props.handleDelete(position);
  }

  return (
    <ul>
      {props.tasks.map((task, key) => {
        return (
          <Task key={key} value={task} handleDelete={onDelete} position={key} />
        );
      })}
    </ul>
  );
}

export default Tasks;
