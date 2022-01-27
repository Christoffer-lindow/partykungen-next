import ProductHeader from "../typography/ProductHeader";

const Article = ({ article, articleImageBaseUrl }) => {
  const {
    name,
    product_box: { image_name },
  } = article;
  const getImageUrl = (imageName) => `${articleImageBaseUrl}/${imageName}.jpg`;
  return (
    <div>
      {article && (
        <div>
          <div className="w-full flex justify-center mb-6">
            <img src={getImageUrl(image_name)} className="object-cover h-60" />
          </div>
          <div className="w-full flex justify-center">
            {article.product_pictures.map((product) => (
              <div>
                <img
                  src={getImageUrl(product.image_name)}
                  className="object-cover h-20"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div>
              <ProductHeader>{name}</ProductHeader>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
