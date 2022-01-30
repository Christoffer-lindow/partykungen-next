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
      {filteredSizes.map((size, i) => (
        <div>
          <div>{size[i].box}</div>
          {size.map((s) => (
            <div className={s.valid ? "bg-green-500" : "bg-pk-error"}>
              {s.productName}
            </div>
          ))}
        </div>
      ))}
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
