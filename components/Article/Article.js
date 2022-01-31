import WatchListButton from "../buttons/WatchListButton";
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
  const imageUrl = `${articleImageBaseUrl}/${image_name}.jpg`;
  const { addFavourite, favourites, favouritesCount } = useFavourites();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(favourites.find((f) => f === article) !== undefined);
  }, [article, favouritesCount]);

  return (
    <>
      <div className="flex justify-center">
        <Image height={180} width={180} src={imageUrl} />
      </div>
      <BottomMargin />

      <ArticlePictures
        productPictures={article.product_pictures}
        articleImageBaseUrl={articleImageBaseUrl}
      />
      <div className="flex flex-col items-center">
        <BottomMargin />
        <ProductHeader>{name}</ProductHeader>
        <BottomMargin />
        <ProductHeader isDanger>{price}</ProductHeader>
        <BottomMargin />
      </div>
      <BottomMargin />
      <WatchListButton
        onClick={() => addFavourite(article)}
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
