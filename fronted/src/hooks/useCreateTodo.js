import axios from "axios";
import { useState } from "react";

const useCreateTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);

  const createTodo = async () => {
    setLoading(true);
    try {
      const todoResponse = await axios.post("http://localhost:3000/todo", {
        title: todo.title,
        comment: todo.comment,
      });
      console.log(todoResponse);
      // Reset the form fields
      setTodo({
        title: "",
        comment: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(name);
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return { todo, loading, createTodo, handleInputChange };
};

export default useCreateTodo;
