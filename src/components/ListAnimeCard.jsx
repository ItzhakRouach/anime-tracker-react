import "./AnimeCard.css";

export const ListAnimeCard = ({ myAnimeList, handleRemoveFromList }) => {
  return (
    <>
      <div className="animes-cards-container">
        {myAnimeList &&
          myAnimeList.map((anime, index) => (
            <div className="anime-card" key={anime.id}>
              <div className=" h-3/4 w-full relative">
                <img
                  className="img-wrapper"
                  src={anime.image}
                  alt={anime.title}
                />
                <h3 className="absolute top-0 ml-2 text-white font-bold text-3xl ">
                  {index + 1}
                </h3>
                <button
                  className="absolute top-0 right-0 px-4 py-2 bg-red-500 hover:bg-red-700 cursor-pointer rounded"
                  onClick={() => handleRemoveFromList(anime)}
                >
                  -
                </button>
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
          ))}
      </div>
    </>
  );
};
