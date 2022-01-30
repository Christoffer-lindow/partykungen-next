import TopHeader from "../heroes/TopHeader";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BottomMargin from "./BottomMargin";

const Layout = ({ children, hasTopHeader, breadCrumbs }) => {
  return (
    <div className="w-full">
      {hasTopHeader ? <TopHeader /> : <BottomMargin />}
      <div className="mx-6">
        {breadCrumbs?.length > 0 && <BreadCrumbs paths={breadCrumbs} />}
        {children}
      </div>
    </div>
  );
};
export default Layout;
