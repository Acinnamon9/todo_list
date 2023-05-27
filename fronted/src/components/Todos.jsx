import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchTodos";
import CreateTodoModal from "./CreateTodoModal";
import TodoCard from "./TodoCard";

function Todos() {
  const { data, fetchData } = useFetchData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="mt-5 px-5">
      <button
        onClick={openModal}
        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500"
      >
        Add Todo Card
      </button>
      <CreateTodoModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="grid grid-cols-4 gap-3 mt-5">
        {data &&
          data.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                comment={todo.comment}
                date={todo.date}
              />
            );
          })}
        <div className="px-5 py-3 shadow-card bg-white rounded-md">
          <h5 className="text-primary-gray text-xl font-semibold">
            Help of Mical Jackson
          </h5>
          <ul className="list-disc text-[#727a74] mt-3">
            <li>This is a Primary Task</li>
            <li>This is a Secondary Task</li>
          </ul>
        </div>
        <div className="px-5 py-3 shadow-card bg-white rounded-md">
          <h5 className="text-primary-gray text-xl font-semibold">
            Help of Mical Jackson
          </h5>
          <ul className="list-disc text-[#727a74] mt-3">
            <li>This is a Primary Task</li>
            <li>This is a Secondary Task</li>
          </ul>
        </div>
        <div className="px-5 py-3 shadow-card bg-white rounded-md">
          <h5 className="text-primary-gray text-xl font-semibold">
            Help of Mical Jackson
          </h5>
          <ul className="list-disc text-[#727a74] mt-3">
            <li>This is a Primary Task</li>
            <li>This is a Secondary Task</li>
          </ul>
        </div>
        <div className="px-5 py-3 shadow-card bg-white rounded-md">
          <h5 className="text-primary-gray text-xl font-semibold">
            Help of Mical Jackson
          </h5>
          <ul className="list-disc text-[#727a74] mt-3">
            <li>This is a Primary Task</li>
            <li>This is a Secondary Task</li>
          </ul>
        </div>
        <div className="px-5 py-3 shadow-card bg-white rounded-md">
          <h5 className="text-primary-gray text-xl font-semibold">
            Help of Mical Jackson
          </h5>
          <ul className="list-disc text-[#727a74] mt-3">
            <li>This is a Primary Task</li>
            <li>This is a Secondary Task</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todos;
