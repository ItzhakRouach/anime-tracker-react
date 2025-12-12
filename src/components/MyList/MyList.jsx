import { ListAnimeCard } from "../ListAnimeCard/ListAnimeCard";
import "./MyList.css";

export const MyList = ({ myAnimeList, handleRemoveFromList }) => {
  return (
    <>
      <div className="header-wrapper">
        <h1 className="header-style">My Anime List</h1>
        <h3 className="header-style">Total: {myAnimeList.length}</h3>
      </div>
      <div>
        <ListAnimeCard
          myAnimeList={myAnimeList}
          handleRemoveFromList={handleRemoveFromList}
        />
      </div>
    </>
  );
};
