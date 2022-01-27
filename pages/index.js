import { useArticle } from "../hooks/articles";
import FetchArticleForm from "../components/forms/FetchArticleForm/FetchArticleForm";
import { useState } from "react";
import { getBoxSizes } from "./api/boxes/sizes";
import Layout from "../components/layouts/Layout";
import HeadSection from "../components/layouts/HeadSection";

const Home = ({ boxSizes }) => {
  const { fetchArticle } = useArticle();
  const [article, setArticle] = useState(null);
  const handleSubmit = async (value) => {
    await fetchArticle(value)
      .then((response) => setArticle(response))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <HeadSection />
      <FetchArticleForm loading onSubmit={(value) => handleSubmit(value)} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return { props: { boxSizes: { ...getBoxSizes() } } };
};

export default Home;
