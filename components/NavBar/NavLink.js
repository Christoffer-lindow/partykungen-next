import Link from "next/link";

const NavLink = ({ imageUrl, linkTo }) => (
  <Link href={linkTo}>
    <img src={imageUrl} className="w-7 h-7 cursor-pointer" />
  </Link>
);
export default NavLink;
