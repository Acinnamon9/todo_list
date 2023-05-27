import PropTypes from "prop-types";
import useCreateTodo from "../hooks/useCreateTodo";
import InputBox from "./InputBox";

function CreateTodoModal({ isOpen, onClose }) {
  const { todo, loading, createTodo, handleInputChange } = useCreateTodo();
  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo();
    onClose(false);
  };
  return (
    <div>
      {isOpen && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">General Info</h3>
                <button
                  className="border-0 text-black bg-gray-400 rounded-full p-1 w-7 h-7"
                  onClick={() => onClose(false)}
                >
                  X
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <InputBox
                    name={"taskName"}
                    htmlFor={"taskName"}
                    placeholder="Task Name"
                    label="Task Name"
                    value={todo.taskName}
                    onChange={handleInputChange}
                  />
                  <InputBox
                    name={"comment"}
                    htmlFor={"comment"}
                    placeholder="Comment"
                    value={todo.comment}
                    label="Comment"
                    onChange={handleInputChange}
                  />
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => onClose(false)}
                >
                  Close
                </button>
                <button
                  className="text-white bg-yellow-500  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  disabled={loading || !todo.comment || !todo.taskName}
                  onClick={handleSubmit}
                >
                  {loading ? "Creating..." : "Create Todo"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

CreateTodoModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

export default CreateTodoModal;
