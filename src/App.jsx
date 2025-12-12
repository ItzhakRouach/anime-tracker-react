import { useState, useEffect, useEffectEvent } from "react";
import { useDebounce } from "react-use";
import { AnimeCard } from "./components/AnimeCard";
import { SearchAnime } from "./components/SearchAnime";
import "./App.css";

const App = () => {
  // Use State to hold the animes from the API
  const [topAnime, setTopAnime] = useState([]);

  // Use State to track what the client search for
  const [search, setSearch] = useState("");

  // Use State to optimize the search engine
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  useDebounce(() => setDebounceSearchTerm(search), 500, [search]);

  // Fetch animes from public API and store it in topAnimes
  const fetchAnime = useEffectEvent(async (query) => {
    try {
      let baseUrl = "https://api.jikan.moe/v4/";
      query
        ? (baseUrl = `${baseUrl}anime?q=${query}`)
        : (baseUrl = `${baseUrl}top/anime`);

      const data = await fetch(baseUrl);
      const res = await data.json();
      setTopAnime(res.data);
    } catch (e) {
      console.log(`error while loading animes: ${e}`);
    }
  });

  useEffect(() => {
    fetchAnime(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <>
      <div className="main">
        <h1 className="main-title">Anime Tracker</h1>
        <SearchAnime search={search} setSearch={setSearch} />
        <AnimeCard topAnime={topAnime} />
      </div>
    </>
  );
};

export default App;
