import React from "react";
import { TodoContext } from "../todoContext";
import "./css/todoForms.css";
import axios from "axios";
const {
  REACT_APP_SERVER,
} = process.env;

function Form() {
  const [newTodoValue, setNewTodoValue] = React.useState({
    title: "",
    description: "",
    expirationDate: "",
  });
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    event.preventDefault();
    setNewTodoValue({
      ...newTodoValue,
      [event.target.name]: event.target.value,
    });
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit =  (e) => {
  addTodo(newTodoValue);
    setOpenModal(false);
    window.location.reload(true);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Escribe tu nueva tarea.</label>
        <label>Titulo:</label>
        <input
          className="inputForm"
          name="title"
          type="text"
          onChange={onChange}
          value={newTodoValue.title}
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={newTodoValue.description}
          onChange={onChange}
          placeholder="Escribe la nueva tarea"
        />
        <label>Fecha de vencimiento</label>
        <input
          className="inputForm"
          name="expirationDate"
          type="date"
          onChange={onChange}
          value={newTodoValue.expirationDate}
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            onClick={onCancel}
            className="TodoForm-button TodoForm-button-cancel"
          >
            cancelar
          </button>

          <button type="submit" className="TodoForm-button TodoForm-button-add">
            Añadir
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
