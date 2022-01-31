const BottomMargin = ({ margin = 4, children, ...rest }) => (
  <div className={`mb-${margin}`} {...rest}>
    {children}
  </div>
);

export default BottomMargin;
