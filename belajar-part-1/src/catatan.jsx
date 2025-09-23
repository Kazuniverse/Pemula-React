import { useState } from "react";
import "./App.css";

function TodoList() {
  const [task, setTask] = useState(""); // input text
  const [todos, setTodos] = useState([]); // daftar todo

  // tambah item baru
  function addTask() {
    if (task.trim() === "") return; // biar ga masuk string kosong
    setTodos([...todos, task]); // tambahkan ke array
    setTask(""); // reset input
  }

  // hapus item tertentu
  function deleteTask(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Tulis tugas..."
      />
      <button onClick={addTask}>Tambah</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
