import Link from "next/link";
import { useRouter } from "next/router";
import { useArticle } from "../../hooks/articles";
import ProductHeader from "../typography/ProductHeader";
import HistoryItem from "./HistoryItem";

const HistoryList = ({ filteredArticles }) => {
  const { getArticleByName, updateCurrentArticle } = useArticle();
  const handleArticleClicked = (article) => {
    updateCurrentArticle(getArticleByName(article.productName));
  };
  return (
    <>
      {filteredArticles.map((size, i) => (
        <div key={`${size}=${i}`}>
          <div className="text-center mb-2">
            <ProductHeader>Box {filteredArticles[i][0].box}</ProductHeader>
          </div>
          {size.map((s, i) => (
            <Link href="/articles" key={`${s}-${i}`}>
              <div>
                <HistoryItem item={s} onClick={() => handleArticleClicked(s)} />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
};

export default HistoryList;
