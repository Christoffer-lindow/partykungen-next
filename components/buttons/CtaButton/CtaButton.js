const CtaButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="w-60 bg-yellow-300 font-bold p-2 rounded-lg hover:bg-yellow-200"
    >
      {children}
    </button>
  );
};

export default CtaButton;
