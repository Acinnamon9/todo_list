import formatDate from "../utils/formateDate";
import PropTypes from "prop-types";

function TodoCard({ title, comment, date }) {
  return (
    <div className="px-5 py-3 shadow-card bg-white rounded-md">
      <h5 className="text-primary-gray text-xl font-semibold">{title}</h5>
      <ul className="list-disc text-[#727a74] mt-3">
        <li>{comment}</li>
      </ul>
      <p className="text-[#727a74]">
        <span className="font-medium">Created:</span>
        <span>{formatDate(date)}</span>
      </p>
    </div>
  );
}

TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TodoCard;
