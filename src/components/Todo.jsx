import { useSelector } from "react-redux";
import AddForm from "./AppForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../feature/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const delHandler = (id) => {
    console.log("Delete", id);
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ width: "90%", maxWidth: "600px" }}>
      <h2>Todo List</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => delHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
