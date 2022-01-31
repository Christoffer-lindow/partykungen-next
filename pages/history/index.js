import Link from "next/link";
import HistoryList from "../../components/History/HistoryList";
import HeadSection from "../../components/layouts/HeadSection";
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
  console.log(validBoxFittingInfo);

  const filteredSizes = boxSizes.map((box) =>
    validBoxFittingInfo.filter((boxInfo) => box.box === boxInfo.box)
  );

  return (
    <Layout breadCrumbs={breadCrumbs}>
      <HeadSection title={"Party king - History"} />
      {validBoxFittingInfo.length > 0 ? (
        <HistoryList filteredArticles={filteredSizes} />
      ) : (
        <div>
          <span>
            There are currently no items in the history. Browse our articles on{" "}
          </span>
          <Link href="/articles" passHref>
            <span className="underline text-pk-blue font-bold">This page</span>
          </Link>
        </div>
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
