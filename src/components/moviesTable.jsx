import Like from "./common/like";
import { Component } from "react";
import Table from "./common/table";
import PropTypes from "prop-types";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      path: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, count, sortColumn, onSort } = this.props;
    return (
      <Table data={movies} count={count} sortColumn={sortColumn} onSort={onSort} columns={this.columns}/>
    );
  }
}

export default MoviesTable;
MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};