import Link from "next/link";
import Layout from "../../components/layouts/Layout";
import { useFavourites } from "../../hooks/favourites";

const Favourites = () => {
  const breadCrumbs = [{ href: "watchlist", name: "Watch list" }];
  const { favourites } = useFavourites();

  return (
    <Layout breadCrumbs={breadCrumbs}>
      <div>
        {favourites.length > 0 ? (
          favourites.map((favourite, i) => (
            <div key={`${favourite}-${i}`}>{favourite.name}</div>
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

export default Favourites;
