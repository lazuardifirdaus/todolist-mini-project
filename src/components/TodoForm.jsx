import { useState } from "react"; // Lakukan import

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState(""); // Definisikan state "title"

  // Definisikan function handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title); // Teruskan "title" sebagai argument
    setTitle(""); // Reset title-nya menjadi string kosong
  };

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Periksa apakah function "handleChangeTitle" berfungsi
  // console.log(title);

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            // Tambahkan event handler "onChange"
            handleChangeTitle(event);
          }}
          value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};

export default TodoForm;
