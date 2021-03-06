import Image from "next/image";
import Link from "next/link";

const BreadCrumbs = ({ paths }) => {
  const renderPaths = () =>
    paths.map((path) => (
      <Link href={path.href} key={path} passHref>
        <div className="hover:cursor-pointer">
          {">"} {path.name}
        </div>
      </Link>
    ));

  return (
    <div className="w-full mb-4 ml-1 flex flex-row items-center">
      <Link href="/">
        <div className="mr-2 hover:cursor-pointer">
          <Image
            src="/images/castle-2.svg"
            width={24}
            height={24}
            alt={"Castle icon"}
          />
        </div>
      </Link>
      {renderPaths()}
    </div>
  );
};

export default BreadCrumbs;
