import FavouriteButton from "../buttons/FavouriteButton/FavouriteButton";
import ProductHeader from "../typography/ProductHeader";
import ArticlePictures from "./ArticlePictures";
import ArticleSizing from "./ArticleSizing";
import BottomMargin from "../layouts/BottomMargin";
import { useFavourites } from "../../hooks/favourites";
const Article = ({ article, articleImageBaseUrl, boxSizes }) => {
  const {
    name,
    product_box: { image_name },
    minprice: { value, suffix },
    variant_first_buyable: variantFirstBuyable,
  } = article;
  const price = value / 100 + suffix;
  const getImageUrl = (imageName) => `${articleImageBaseUrl}/${imageName}.jpg`;

  const { addFavourite } = useFavourites();

  return (
    <>
      <div className="w-full flex justify-center mb-6">
        <img src={getImageUrl(image_name)} className="object-cover h-60" />
      </div>
      <ArticlePictures
        productPictures={article.product_pictures}
        getImageUrl={getImageUrl}
      />

      <div className="flex justify-center mb-4">
        <div className="text-center">
          <div className="mb-4">
            <ProductHeader>{name}</ProductHeader>
          </div>
          <ProductHeader isDanger>{price}</ProductHeader>
        </div>
      </div>
      <BottomMargin />
      <FavouriteButton onClick={() => addFavourite(article)} />
      <BottomMargin />

      <ArticleSizing
        boxSizes={boxSizes}
        variantFirstBuyable={variantFirstBuyable}
      />
    </>
  );
};

export default Article;
