import HistoryList from "../../components/History/HistoryList";
import Layout from "../../components/layouts/Layout";
import { useArticle } from "../../hooks/articles";
import { getArticlesThatFitInsideBoxes, props } from "../../utils/boxUtils";
import { getBoxSizes } from "../api/boxes/sizes";

const History = ({ boxSizes }) => {
  const breadCrumbs = [{ href: "history", name: "History" }];
  const { articles } = useArticle();
  const articlesInfo = articles.map((article) => article.article);
  const validBoxFittingInfo = getArticlesThatFitInsideBoxes(
    props,
    articlesInfo,
    boxSizes
  );

  const filteredSizes = boxSizes.map((box) =>
    validBoxFittingInfo.filter((boxInfo) => box.box === boxInfo.box)
  );

  return (
    <Layout breadCrumbs={breadCrumbs}>
      {validBoxFittingInfo.length > 0 && (
        <HistoryList filteredArticles={filteredSizes} />
      )}
    </Layout>
  );
};

export const getServerSideProps = async ({ boxSizes }) => {
  return {
    props: {
      boxSizes: getBoxSizes(),
    },
  };
};

export default History;
