import _ from "lodash";
import { PropTypes } from "prop-types";
const Pagination = ({ items, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="ml-5" aria-label="Page navigation example ">
      <ul className="inline-flex -space-x-px text-sm">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""}>
            <a onClick={() => onPageChange(page)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
  export default Pagination;