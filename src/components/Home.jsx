import { AnimeCard } from "./AnimeCard";
import { SearchAnime } from "./SearchAnime";

export const Home = ({
  search,
  setSearch,
  topAnime,
  handleAddToList,
  myAnimeList,
}) => {
  return (
    <>
      <SearchAnime search={search} setSearch={setSearch} />
      <AnimeCard
        topAnime={topAnime}
        handleAddToList={handleAddToList}
        myAnimeList={myAnimeList}
      />
    </>
  );
};
