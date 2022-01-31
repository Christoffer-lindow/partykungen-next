import Image from "next/image";

const ArticlePictures = ({ productPictures, getImageUrl }) => {
  return (
    <div className="w-full flex justify-center mb-6">
      {productPictures.map((product) => (
        <Image
          src={getImageUrl(product.image_name)}
          height={80}
          width={80}
          key={product.image_name}
        />
      ))}
    </div>
  );
};

export default ArticlePictures;
