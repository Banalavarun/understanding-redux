import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"; 
import { addTodo, markAsDone, deleteTodo } from "../features/todo/todoSlice";
import "./TodoApp.css";

const TodoApp = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <>
      <h1>Todo List App</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Enter a task..." onChange = {(e)=>setText(e.target.value)} />
        <button type="submit">Add</button>
    </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => dispatch(markAsDone(todo.id))}>Mark As Done</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
