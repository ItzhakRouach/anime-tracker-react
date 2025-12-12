import "./AnimeCard.css";

export const AnimeCard = ({ topAnime, handleAddToList, myAnimeList }) => {
  return (
    <>
      <div className="animes-cards-container">
        {topAnime &&
          topAnime.map((anime) => {
            const isAnimeInList = myAnimeList.some(
              (savedAnime) => savedAnime.id === anime.mal_id
            );

            return (
              <div className="anime-card" key={anime.mal_id}>
                <div className=" h-3/4 w-full relative">
                  <img
                    className="img-wrapper"
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                  />
                  {!isAnimeInList && (
                    <button
                      className="absolute top-0 left-0   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleAddToList(anime)}
                    >
                      +
                    </button>
                  )}
                </div>
                <div className="content">
                  <h3 className="title">{anime.title}</h3>
                  <div className="details">
                    <span>⭐ {anime.score}</span>
                    <span>{anime.year || "N/A"}</span>
                    <span>{anime.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
