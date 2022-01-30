import Link from "next/link";
import NavLink from "./NavLink";

const rightLinks = [
  {
    imageUrl: "/images/pk-cart-noface.svg",
    linkTo: "/",
  },
  {
    imageUrl: "/images/pk-heart_b-01.svg",
    linkTo: "/watchlist",
  },
  {
    imageUrl: "/images/pk-bars.svg",
    linkTo: "/",
  },
];

const RenderLinks = ({ links }) =>
  links.map((link) => (
    <NavLink imageUrl={link.imageUrl} linkTo={link.linkTo} />
  ));

const NavBar = () => {
  return (
    <div className="lg:h-16 h-22 font-semibold bg-pk-yellow">
      <div className="flex justify-between mx-7 items-center h-full">
        <div className="left w-6/8 flex">
          <Link href="/">
            <img
              src="/images/Partykungen_logo_RGB.svg"
              className="h-20 w-20 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex w-1/4 justify-between">
          <RenderLinks links={rightLinks} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
