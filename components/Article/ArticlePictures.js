const ArticlePictures = ({ productPictures, getImageUrl }) => {
  return (
    <div className="w-full flex justify-center mb-6">
      {productPictures.map((product) => (
        <img
          src={getImageUrl(product.image_name)}
          className="object-cover h-20"
        />
      ))}
    </div>
  );
};

export default ArticlePictures;