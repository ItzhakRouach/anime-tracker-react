import { AnimeCard } from "../AnimeCard/AnimeCard";
import { SearchAnime } from "../SearchAnime/SearchAnime";

export const Home = ({
  search,
  setSearch,
  topAnime,
  handleAddToList,
  myAnimeList,
}) => {
  return (
    <>
      <h1 className="main-title">Anime Tracker</h1>
      <SearchAnime search={search} setSearch={setSearch} />
      <AnimeCard
        topAnime={topAnime}
        handleAddToList={handleAddToList}
        myAnimeList={myAnimeList}
      />
    </>
  );
};
