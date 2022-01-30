import TopHeader from "../heroes/TopHeader";
import BottomMargin from "./BottomMargin";

const Layout = ({ children, hasTopHeader }) => {
  return (
    <div className="w-full">
      {hasTopHeader ? <TopHeader /> : <BottomMargin />}
      <div className="mx-6">{children}</div>
    </div>
  );
};
export default Layout;
