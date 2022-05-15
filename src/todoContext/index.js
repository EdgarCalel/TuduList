import React from "react";
import { useGetData } from "./useGetData";
import axios from "axios";
const { REACT_APP_SERVER } = process.env;

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todosList, loading, error } = useGetData();

  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completeTodos = todosList.filter((todo) => !!todo.completed).length;
  const totalTodos = todosList.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todosList;
  } else {
    searchedTodos = todosList.filter((todo) => {
      const todoText = todo.title.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = async (text) =>await axios.post(`${REACT_APP_SERVER}/todoList`, text);

  const deleteTodo = async (text) => {
    await axios.delete(`${REACT_APP_SERVER}/todoList?id=${text}`);
    window.location.reload(true);
  };

  const updateTodo = async (text) =>await axios.put(`${REACT_APP_SERVER}/todoListU?id=${text.id}`, text);

  const completeTodo = async (text) => {
    await axios.put(`${REACT_APP_SERVER}/todoList/complete?id=${text}`);
    window.location.reload(true);
  };
  const AggCalendarItem = async (text)=>{
    await axios.post(`${REACT_APP_SERVER}/aggCalendar?id=${text.id}`)
    window.location.reload(true);
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        completeTodos,
        totalTodos,
        search,
        setSearch,
        searchedTodos,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal,
        addTodo,
        updateTodo,
        AggCalendarItem
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
