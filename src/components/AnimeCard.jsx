import "./AnimeCard.css";

export const AnimeCard = ({ topAnime }) => {
  return (
    <>
      <div className="animes-cards-container">
        {topAnime &&
          topAnime.map((anime) => (
            <div className="anime-card" key={anime.mal_id}>
              <div className=" h-3/4 w-full">
                <img
                  className="img-wrapper"
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                />
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
