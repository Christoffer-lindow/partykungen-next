import HeadSection from "../components/layouts/HeadSection";
import CtaButton from "../components/buttons/CtaButton/CtaButton";
import Layout from "../components/layouts/Layout";
import BottomMargin from "../components/layouts/BottomMargin";

const Home = () => {
  return (
    <Layout hasTopHeader>
      <HeadSection title={"Party king - Fighting boredom"} />
      <BottomMargin>
        <CtaButton className="mb-4">Articles</CtaButton>
      </BottomMargin>
      <CtaButton className="">History</CtaButton>
    </Layout>
  );
};

export default Home;
