import Task from "./Task";
import "./TaskList.css";
import PropTypes from "prop-types";

const TaskList = ({ tasks, checkButtonHandler, deleteButtonHandler }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          checkButtonHandler={checkButtonHandler}
          deleteButtonHandler={deleteButtonHandler}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  checkButtonHandler: PropTypes.func.isRequired,
  deleteButtonHandler: PropTypes.func.isRequired,
};

export default TaskList;
