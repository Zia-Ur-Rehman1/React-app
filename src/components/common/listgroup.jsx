import { PropTypes } from "prop-types";

const ListGroup = ({genres, onItemSelect, textProperty = 'name', valueProperty='_id',selectedItem}) => {
  const classes = "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600";
  return (
    <ul className="m-5 w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
     
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
        onClick={() => onItemSelect(genre)}
          className= {genre === selectedItem ? classes + ' bg-blue-500' : classes}
        >
          {genre[textProperty]}
        </li>
      ))}

    </ul>
  );
};


export default ListGroup;
ListGroup.propTypes = {
  genres: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  selectedItem: PropTypes.object,
};