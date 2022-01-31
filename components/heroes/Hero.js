const Hero = ({ url = "/images/top-banner.jpeg" }) => {
  return <img src={url} className=" w-full h-96 sm:h-full object-cover mb-6" />;
};

export default Hero;
