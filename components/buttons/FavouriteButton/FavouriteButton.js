const FavouriteButton = ({ disabled, ...rest }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full text-center ${
        disabled
          ? "bg-pink-200"
          : "bg-pk-favourite hover:bg-pink-400 hover:cursor-pointer"
      } font-bold py-3 rounded-lg uppercase text-white`}
      {...rest}
    >
      <span>
        {disabled ? "Already added to watch list" : "Add to watch list"}
      </span>
    </button>
  );
};

export default FavouriteButton;
