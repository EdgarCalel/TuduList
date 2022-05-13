import React, { useState } from "react";
import "./css/TodoItem.css";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { TodoContext } from "../todoContext/index";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function TodoItem(props) {
  const [modalEditar, setModalEditar] = useState({
    title: "",
    description: "",
    expirationDate: "",
  });

  const { updateTodo, setOpenModal } = React.useContext(TodoContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChange = (event) => {
    event.preventDefault();
    setModalEditar({
      ...modalEditar,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (e) => {

    updateTodo(modalEditar);
    debugger;
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpen(false);
  };


  const editRow =(task)=>{
    setOpen(true);
    setModalEditar({
      id: task.id, 
      title: task.title,
      description: task.description,
      expirationDate: task.expirationDate
    
    })
debugger
  }
  return (
    <>
      <div className="Principal_item">
        <li className="TodoItem">
          <span
            className={`Icon Icon-check ${
              props?.completed && "Icon-check--active"
            }`}
            onClick={props.onComplete}
          >
            <i className="fa-solid fa-check"></i>
          </span>
          <p
            className={`TodoItem-p ${
              props.completed && "TodoItem-p--complete"
            }`}
          >
            {props.text.title}
          </p>
          <button onClick={()=>editRow(props.text)}>
            <HistoryEduIcon />
          </button>
          <span className="Icon Icon-delete" onClick={props.onDelete}>
            <HighlightOffIcon />
          </span>
        </li>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={onSubmit}>
              <label>Modifica tu nueva tarea.</label>
              <label>Titulo:</label>
              <input
                className="inputForm"
                name="title"
                type="text"
                onChange={onChange}
                value={modalEditar.title}
              />
              <textarea
                name="description"
                cols="30"
                rows="10"
                value={modalEditar.description}
                onChange={onChange}
                placeholder="Escribe la nueva tarea"
              />
              <label>Fecha de vencimiento</label>
              <input
                className="inputForm"
                name="expirationDate"
                type="date"
                onChange={onChange}
                value={modalEditar.expirationDate}
              />
              <div className="TodoForm-buttonContainer">
                <button
                  type="button"
                  onClick={onCancel}
                  className="TodoForm-button TodoForm-button-cancel"
                >
                  cancelar
                </button>

                <button
                  type="submit"
                  className="TodoForm-button TodoForm-button-add"
                >
                  Guardar
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default TodoItem;
