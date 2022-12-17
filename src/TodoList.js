import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: input, isCompleted: false }]);
    setInput("");
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    const todo = newTodos.splice(index, 1)[0];
    todo.isCompleted = !todo.isCompleted;
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, todo]);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(index)}
            />
            {todo.text}
            <Button variant="contained" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <Box style={{ background: "#969183" }}>
        {completedTodos.length === 0 ? (
          ""
        ) : (
          <>
            <h3 style={{ fontSize: "24px" }}>Completed Todos:</h3>
            <ul>
              {completedTodos.map((todo, index) => (
                <li
                  key={index}
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  {todo.text}
                </li>
              ))}
            </ul>
          </>
        )}
      </Box>
    </Box>
  );
}

export default TodoList;
