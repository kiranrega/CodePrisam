import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build a todo app", isCompleted: false },
  ]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    let res = newTodos.filter((todo) => todo.isCompleted === true);
    let trc = [...completeTodos, res];
    setCompleteTodos(trc);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {console.log(completeTodos)}
      <div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo(e.target.elements.todo.value);
              e.target.elements.todo.value = "";
            }}
          >
            <input name="todo" />
            <button type="submit">Add Todo</button>
          </form>
          {todos.map((todo, index) => (
            <div key={index}>
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {completeTodos.map((todo, index) => (
          <h1>{todo.text}</h1>
        ))}
      </div>
    </>
  );
}

export default TodoList;
