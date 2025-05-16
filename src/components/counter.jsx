import { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 grid-rows-1 gap-x-4  ">
          <span
            className={`${this.getBadgeClasses()}  my-auto mx-auto text-md font-medium me-2 px-2.5 py-0.5 rounded-full`}
          >
            {this.formatCount()}  
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="p-1  my-auto mx-auto hover:bg-blue-700 rounded inline-flex items-center justify-center bg-gray-400"
          >
            <img src="/plus.svg" alt="Icon" className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={` ${this.disbaleButton()}p-1  my-1 p-2  mx-auto  rounded inline-flex items-center justify-center`}
          >
            <img src="/minus.svg" alt="Icon" className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="bg-red-500 flex my-auto mx-auto justify-center font-medium dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            <img src="/delete.svg" alt="Icon" className="w-5 h-5 text-white" />
          </button>
        </div>
      </>
    );
  }
  getBadgeClasses() {
    let badge_color =
      this.props.counter.value === 0
        ? "bg-amber-300 text-black dark:bg-amber-300 dark:text-black"
        : "bg-blue-100 text-white dark:bg-blue-900 dark:text-white";
    return badge_color;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
  disbaleButton() {
    return this.props.counter.value === 0 ? "disabled  bg-gray-200 " : "bg-blue-500 hover:bg-blue-700";
  }
}
export default Counter;

Counter.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counter: PropTypes.object.isRequired,
};