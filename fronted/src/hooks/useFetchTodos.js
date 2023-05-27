import axios from "axios";
import { useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const todoResponse = await axios.get("http://localhost:3000/todo");
      setData(todoResponse.data.todos);
      console.log(todoResponse);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetchData;
