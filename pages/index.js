import HeadSection from "../components/layouts/HeadSection";
import CtaButton from "../components/buttons/CtaButton/CtaButton";
import Layout from "../components/layouts/Layout";
import BottomMargin from "../components/layouts/BottomMargin";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  return (
    <Layout hasTopHeader>
      <HeadSection title={"Party king - Fighting boredom"} />
      <BottomMargin>
        <CtaButton onClick={() => push("/articles")} className="mb-4">
          Articles
        </CtaButton>
      </BottomMargin>
      <CtaButton onClick={() => push("/history")} className="">
        History
      </CtaButton>
    </Layout>
  );
};

export default Home;
