import WatchListButton from "../buttons/WatchListButton";
import ProductHeader from "../typography/ProductHeader";
import ArticlePictures from "./ArticlePictures";
import ArticleSizing from "./ArticleSizing";
import BottomMargin from "../layouts/BottomMargin";
import { useWatchlist } from "../../hooks/watchlist";
import { useEffect, useState } from "react";
import Image from "next/image";
const Article = ({ article, articleImageBaseUrl, boxSizes }) => {
  const {
    name,
    product_box: { image_name },
    minprice: { value, suffix },
    variant_first_buyable: variantFirstBuyable,
  } = article;
  const price = value / 100 + suffix;
  const imageUrl = `${articleImageBaseUrl}/${image_name}.jpg`;
  const { addArticleToWatchlist, watchlist, watchlistItemsCount } =
    useWatchlist();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(watchlist.find((f) => f === article) !== undefined);
  }, [article, watchlistItemsCount, watchlist]);

  return (
    <>
      <div className="flex justify-center">
        <Image height={180} width={180} src={imageUrl} alt={name} />
      </div>
      <BottomMargin />

      <ArticlePictures
        productPictures={article.product_pictures}
        articleImageBaseUrl={articleImageBaseUrl}
      />
      <div className="flex text-center justify-center">
        <div>
          <BottomMargin />
          <ProductHeader>{name}</ProductHeader>
          <BottomMargin />
          <ProductHeader isDanger>{price}</ProductHeader>
          <BottomMargin />
        </div>
      </div>
      <BottomMargin />
      <WatchListButton
        onClick={() => addArticleToWatchlist(article)}
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
