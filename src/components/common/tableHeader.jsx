import { Component } from "react";
import PropTypes from "prop-types";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc") {
      return <img src="/asc.svg" alt="Icon" className=" inline-flex w-4 h-4 text-gray-500" />;
    }
    return <img src="/dec.svg" alt="Icon" className="inline-flex w-4 h-4 text-gray-500" />;

  }
  render() { 
    return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {this.props.columns.map((column) => (
              <th
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            ))}
            
          </tr>
        </thead>
    );
  }
}

export default TableHeader;
TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
};
