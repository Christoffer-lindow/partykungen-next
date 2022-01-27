import Image from "next/image";

const NavBar = () => {
  return (
    <div className="lg:h-16 h-22 font-semibold bg-pk-yellow">
      <div className="flex justify-between mx-7 items-center h-full">
        <div className="left w-4/6 flex">
          <img src="/images/Partykungen_logo_RGB.svg" className="h-20 w-20" />
        </div>
        <div className="flex w-2/6 justify-between">
          <img src="/images/pk-cart-noface.svg" className="w-6 h-6" />
          <img src="/images/pk-heart_b-01.svg" className="w-6 h-6" />
          <img src="/images/pk-bars.svg" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
