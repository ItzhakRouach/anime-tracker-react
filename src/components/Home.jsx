import { AnimeCard } from "./AnimeCard";
import { SearchAnime } from "./SearchAnime";

export const Home = ({ search, setSearch, topAnime }) => {
  return (
    <>
      <SearchAnime search={search} setSearch={setSearch} />
      <AnimeCard topAnime={topAnime} />
    </>
  );
};
