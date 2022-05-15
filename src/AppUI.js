import React from "react";
import { TodoContext } from "./todoContext";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoForm from "./components/Form";
import EditarForm from "./components/modalEditar"
import { Modal } from "./components/modal";
import { EmptyTodos } from "./components/Skeleton/EmptyTodos";
import { TodosError } from "./components/Skeleton/TodosError";
import { TodosLoading } from "./components/Skeleton/TodosLoading";
import "./components/css/appUi.css";
import ModalCalendar from './components/modalCalendar'


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    updateTodo
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      <ModalCalendar />
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos?.map((todo, index) => (
          <TodoItem
        debugger
          key={index}
            text={todo}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onUpdate={() => updateTodo(todo.id)}
          />
        ))
        }
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
       

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
export { AppUI };
