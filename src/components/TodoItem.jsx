import { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  // Peroleh "toggleCompleted" dan "deleteTodo" dari TodoContext
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.title}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.completed} // Memberikan id dari todo sebagai argument
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      {/* Tambahkan sebuah button di sini */}
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const styles = {
  title: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    alignItems: "center",
  },
};

export default TodoItem;
