import Link from "next/link";

const NavLink = ({ imageUrl, linkTo, ...rest }) => (
  <Link href={linkTo} {...rest}>
    <img src={imageUrl} className="w-7 h-7 cursor-pointer" />
  </Link>
);
export default NavLink;
