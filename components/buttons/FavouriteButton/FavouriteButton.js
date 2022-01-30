const FavouriteButton = ({ ...rest }) => {
  return (
    <button
      className="w-full text-center bg-pk-favourite font-bold py-3 rounded-lg hover:bg-pink-400 uppercase text-white"
      {...rest}
    >
      <span>Add to watch list</span>
    </button>
  );
};

export default FavouriteButton;
