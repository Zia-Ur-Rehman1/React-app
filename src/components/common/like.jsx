import { PropTypes } from "prop-types";

const Like = ({liked , onClick}) => {
  return (  
     <img
      src={liked ? '/heart.svg' : '/outlineHeart.svg'}
      alt="Icon"
      onClick={onClick}
      className="w-5 h-5  cursor-pointer"  />

  );
}
 
export default  Like;
Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};