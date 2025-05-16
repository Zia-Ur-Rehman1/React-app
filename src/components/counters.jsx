import Counter from "./counter";
import PropTypes from "prop-types";
const  Counters = ({onReset, onIncrement,onDecrement, onDelete, counters}) => {
  return (
    <>
      <button
        onClick={onReset}
        className="font-medium bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"> Reset</button>
      {counters.map(counter => (
        <Counter key={counter.id} onDelete={onDelete} counter={counter} 
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        />
      ))}
    </>
  );
}

export default Counters;
Counters.propTypes = {
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  counters: PropTypes.array.isRequired,
};