const ProductHeader = ({ isDanger, children }) => {
  return (
    <h1
      className={`${
        isDanger ? "text-pk-error text-5xl" : "text-pk-blue text-4xl"
      } font-bold font-sans`}
    >
      {children}
    </h1>
  );
};

export default ProductHeader;
