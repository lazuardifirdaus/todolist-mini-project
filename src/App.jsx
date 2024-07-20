import { useState, createContext } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
// import "./App.css";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Join Ready Set Code!",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru",
      completed: false,
    },
    {
      id: 3,
      title: "Study React Fundamental",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const deleteTodos = todos.filter((todo) => {
      if (todo.id === todoId) {
        return false;
      }
      return true;
    });
    setTodos(deleteTodos);
  };

  const addTodo = (todoTitle) => {
    // Tambahkan validasi jika ternyata tidak ada yang diketikkan sebagai title
    if (todoTitle === "") {
      return;
    }

    // Buat data newTodo menggunakan nilai dari todoTitle
    const newTodo = {
      // id: todos.length + 1,
      id: todos[todos.length - 1].id + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.header}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  header: {
    fontSize: "36px",
  },
};

export default App;