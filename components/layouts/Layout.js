import TopHeader from "../heroes/TopHeader";

const Layout = ({ children, hasTopHeader }) => {
  return (
    <div className="w-full">
      {hasTopHeader && <TopHeader />}
      <div className="mx-6">{children}</div>
    </div>
  );
};
export default Layout;
