import Layout from "../../components/layouts/Layout";
import { useArticle } from "../../hooks/articles";
import { getArticlesThatFitInsideBoxes, props } from "../../utils/boxUtils";
import { getBoxSizes } from "../api/boxes/sizes";

const History = ({ boxSizes }) => {
  const breadCrumbs = [{ href: "history", name: "History" }];
  const { articles } = useArticle();
  const articlesInfo = articles.map((article) => article.article);
  const a = getArticlesThatFitInsideBoxes(props, articlesInfo, boxSizes);
  console.log(a);
  return (
    <Layout breadCrumbs={breadCrumbs}>
      {articles.map((article) => article.id)}
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
