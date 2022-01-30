import Link from "next/link";

const BreadCrumbs = ({ paths }) => {
  console.log(paths);
  const renderPaths = () =>
    paths.map((path) => (
      <Link href={path.href}>
        <div className="hover:cursor-pointer">
          {">"} {path.name}
        </div>
      </Link>
    ));

  return (
    <div className="w-full mb-4 ml-1 flex flex-row items-center">
      <Link href="/">
        <img src="./images/castle-2.svg" className="h-6 mr-2 cursor-pointer" />
      </Link>
      {renderPaths()}
    </div>
  );
};

export default BreadCrumbs;
