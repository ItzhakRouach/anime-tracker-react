import { ListAnimeCard } from "./ListAnimeCard";

export const MyList = ({ myAnimeList, handleRemoveFromList }) => {
  return (
    <div className="mt-4">
      <ListAnimeCard
        myAnimeList={myAnimeList}
        handleRemoveFromList={handleRemoveFromList}
      />
    </div>
  );
};
