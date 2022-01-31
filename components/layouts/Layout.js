import Hero from "../heroes/Hero";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BottomMargin from "./BottomMargin";

const Layout = ({ children, hasHero, breadCrumbs }) => {
  return (
    <div className="w-full">
      {hasHero ? <Hero /> : <BottomMargin />}
      <div className="mx-6">
        {breadCrumbs?.length > 0 && <BreadCrumbs paths={breadCrumbs} />}
        {children}
      </div>
    </div>
  );
};
export default Layout;
