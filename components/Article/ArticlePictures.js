import Image from "next/image";

const ArticlePictures = ({ productPictures, articleImageBaseUrl }) => {
  const getImageUrl = (imageName) => `${articleImageBaseUrl}/${imageName}.jpg`;
  return (
    <div className="w-full flex justify-center">
      {productPictures.map((product) => (
        <Image
          src={getImageUrl(product.image_name)}
          height={80}
          width={80}
          key={product.image_name}
          alt={product.image_name}
        />
      ))}
    </div>
  );
};

export default ArticlePictures;
