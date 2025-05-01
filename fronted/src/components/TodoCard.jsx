import formatDate from "../utils/formateDate";
import PropTypes from "prop-types";

function TodoCard({ id, taskName, comment, date, onDelete }) {
  return (
    <div className="px-5 py-3 shadow-card bg-white rounded-md">
      <h5 className="text-primary-gray text-xl font-semibold">{taskName}</h5>
      <ul className="list-disc text-[#727a74] mt-3">
        <li>{comment}</li>
      </ul>
      <p className="text-[#727a74] mt-2">
        <span className="font-medium">Created:</span>
        <span> {formatDate(date)}</span>
      </p>
      <button
        onClick={() => onDelete(id)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired, // 👈 Required for delete
};

export default TodoCard;
