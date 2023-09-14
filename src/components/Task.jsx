import "./Task.css";
import PropTypes from "prop-types";

const Task = ({ task, checkButtonHandler, deleteButtonHandler }) => {
  return (
    <div className="task">
      <li
        key={task.id}
        className={`list-item ${task.checked ? "checked" : "unchecked"}`}
      >
        {task.text}
      </li>
      <button
        type="button"
        className="check"
        onClick={() => checkButtonHandler(task.id)}
      >
        Check
      </button>
      <button
        type="button"
        className="delete"
        onClick={() => deleteButtonHandler(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  checkButtonHandler: PropTypes.func.isRequired,
  deleteButtonHandler: PropTypes.func.isRequired,
};

export default Task;
