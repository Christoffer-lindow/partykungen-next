const NavBar = () => {
  return (
    <div className="lg:h-16 h-22 font-semibold bg-pk-yellow mb-4">
      <div className="flex justify-between mx-7 items-center h-full">
        <div className="left w-6/8 flex">
          <img src="/images/Partykungen_logo_RGB.svg" className="h-20 w-20" />
        </div>
        <div className="flex w-1/4 justify-between">
          <img src="/images/pk-cart-noface.svg" className="w-7 h-7" />
          <img src="/images/pk-heart_b-01.svg" className="w-7 h-7" />
          <img src="/images/pk-bars.svg" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
