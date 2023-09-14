import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const checkButtonHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        } else {
          return task;
        }
      });
    });
  };

  const deleteButtonHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <Card>
      <Form addTask={addTask} />
      <TaskList
        tasks={tasks}
        checkButtonHandler={checkButtonHandler}
        deleteButtonHandler={deleteButtonHandler}
      />
    </Card>
  );
}

export default App;
