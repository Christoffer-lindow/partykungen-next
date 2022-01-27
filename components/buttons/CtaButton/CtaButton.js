const CtaButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="w-full bg-yellow-300 font-bold p-2 rounded-lg hover:bg-yellow-200"
    >
      {children}
    </button>
  );
};

export default CtaButton;
