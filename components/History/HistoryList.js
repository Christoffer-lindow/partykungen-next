import { useRouter } from "next/router";
import { useArticle } from "../../hooks/articles";
import ProductHeader from "../typography/ProductHeader";
import HistoryItem from "./HistoryItem";

const HistoryList = ({ filteredArticles }) => {
  const { getArticleByName, updateCurrentArticle } = useArticle();
  const { push } = useRouter();

  const handleArticleClicked = (article) => {
    updateCurrentArticle(getArticleByName(article.productName));
    push("/articles");
  };
  return (
    <>
      {filteredArticles.map((size, i) => (
        <>
          <div className="text-center mb-2">
            <ProductHeader>Box {filteredArticles[i][0].box}</ProductHeader>
          </div>
          {size.map((s) => (
            <HistoryItem item={s} onClick={() => handleArticleClicked(s)} />
          ))}
        </>
      ))}
    </>
  );
};

export default HistoryList;
