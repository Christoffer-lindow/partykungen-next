import FavouriteButton from "../buttons/FavouriteButton/FavouriteButton";
import ProductHeader from "../typography/ProductHeader";
import ArticlePictures from "./ArticlePictures";
import ArticleSizing from "./ArticleSizing";
import BottomMargin from "../layouts/BottomMargin";
import { useFavourites } from "../../hooks/favourites";
import { useEffect, useState } from "react";
import Image from "next/image";
const Article = ({ article, articleImageBaseUrl, boxSizes, requestError }) => {
  const {
    name,
    product_box: { image_name },
    minprice: { value, suffix },
    variant_first_buyable: variantFirstBuyable,
  } = article;
  const price = value / 100 + suffix;
  const getImageUrl = (imageName) => `${articleImageBaseUrl}/${imageName}.jpg`;
  const { addFavourite, favourites, favouritesCount } = useFavourites();
  const [isDisabled, setIsDisabled] = useState(false);
  const handleAddFavourite = (article) => addFavourite(article);

  useEffect(() => {
    setIsDisabled(favourites.find((f) => f === article) !== undefined);
  }, [article, favouritesCount]);

  return (
    <>
      <div className="flex justify-center">
        <Image height={180} width={180} src={getImageUrl(image_name)} />
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
      <FavouriteButton
        onClick={() => handleAddFavourite(article)}
        disabled={isDisabled}
      />
      <BottomMargin />

      <ArticleSizing
        boxSizes={boxSizes}
        variantFirstBuyable={variantFirstBuyable}
      />
    </>
  );
};

export default Article;
