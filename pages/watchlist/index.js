import Link from "next/link";
import Layout from "../../components/layouts/Layout";
import { useWatchlist } from "../../hooks/watchlist";

const WatchList = () => {
  const breadCrumbs = [{ href: "watchlist", name: "Watch list" }];
  const { watchlist } = useWatchlist();

  return (
    <Layout breadCrumbs={breadCrumbs}>
      <div>
        {watchlist.length > 0 ? (
          watchlist.map((article, i) => (
            <div key={`${article}-${i}`}>{article.name}</div>
          ))
        ) : (
          <div>
            <span>
              There are currently no items in the watchlist. Browse our articles
              on{" "}
            </span>
            <Link href="/articles">
              <span className="underline text-pk-blue font-bold">
                This page
              </span>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WatchList;
