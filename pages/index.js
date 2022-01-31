import HeadSection from "../components/layouts/HeadSection";
import PKButton from "../components/buttons/PKButton";
import Layout from "../components/layouts/Layout";
import BottomMargin from "../components/layouts/BottomMargin";
import { useRouter } from "next/router";
import ProductHeader from "../components/typography/ProductHeader";

const Home = () => {
  const { push } = useRouter();
  return (
    <Layout hasHero>
      <HeadSection title={"Party king - Fighting boredom"} />
      <BottomMargin>
        <div className="text-center">
          <ProductHeader isDanger>Not a product by Partykungen</ProductHeader>
        </div>
      </BottomMargin>
      <BottomMargin>
        <PKButton onClick={() => push("/articles")} className="mb-4">
          Articles
        </PKButton>
      </BottomMargin>
      <PKButton onClick={() => push("/history")} className="">
        History
      </PKButton>
    </Layout>
  );
};

export default Home;
