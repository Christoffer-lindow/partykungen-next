import HeadSection from "../components/layouts/HeadSection";
import PKButton from "../components/buttons/PKButton";
import Layout from "../components/layouts/Layout";
import BottomMargin from "../components/layouts/BottomMargin";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  return (
    <Layout hasTopHeader>
      <HeadSection title={"Party king - Fighting boredom"} />
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
