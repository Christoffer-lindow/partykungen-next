const CtaButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="w-full bg-pk-yellow font-bold p-2 rounded-lg hover:bg-yellow-200 uppercase"
    >
      {children}
    </button>
  );
};

export default CtaButton;
