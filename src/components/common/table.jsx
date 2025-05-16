import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({ data, count, columns, sortColumn, onSort }) => {
  return (
    <div className=" m-5  relative overflow-x-auto shadow-md sm:rounded-lg">
        <p className="m-2">Showing {count} movies in the database</p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody columns={columns} data={data} />
        </table>
      </div>
    );
}

export default Table;
Table.propTypes = {
  data: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
};