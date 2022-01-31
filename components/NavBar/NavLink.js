import Image from "next/image";
import Link from "next/link";

const NavLink = ({ imageUrl, linkTo, ...rest }) => (
  <Link href={linkTo} {...rest}>
    <div>
      <Image width={22} height={22} src={imageUrl} className="cursor-pointer" />
    </div>
  </Link>
);
export default NavLink;
