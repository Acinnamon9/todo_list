// useDeleteTodo.js
import axios from "axios";
import { useState } from "react";

const useDeleteTodo = () => {
  const [deleting, setDeleting] = useState(false);

  const deleteTodo = async (id) => {
    setDeleting(true);
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setDeleting(false);
    }
  };

  return { deleteTodo, deleting };
};

export default useDeleteTodo;
