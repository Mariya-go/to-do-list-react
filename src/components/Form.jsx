import "./Form.css";
import PropTypes from "prop-types";
import { useState } from "react";
import uuid from "react-uuid";

const Form = ({ addTask }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const changeInputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);

      const task = {
        id: uuid(),
        text: inputText,
        checked: false,
      };

      addTask(task);
      setInputText("");
    }
  };

  return (
    <>
      <form className="form" onSubmit={(e) => submitFormHandler(e)}>
        <input
          className="input"
          type="text"
          placeholder="Add a new task"
          value={inputText}
          onChange={(e) => changeInputHandler(e)}
        />
        <button className="add-btn" type="submit">
          Add task
        </button>
      </form>
      {error && <div className="error">Please add a text</div>}
    </>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
