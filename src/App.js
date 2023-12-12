import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import Select from "./Select";

export default function App() {
  const [word, setWord] = useState();
  const [all, setAll] = useState([]);
  const [main, setMain] = useState([]);
  // const [audio, setAudio] = useState();

  const dataApi = async () => {
    try {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const dataJ = await data.json();
      console.log(dataJ);
      setAll(dataJ);
      setMain(dataJ[0]);
    } catch (error) {
      // Handle error here
      alert(`Error fetching definition for "${word}": ${error.message}`);
    }
  };

  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Ermix Dictionary</h1>
          <div className="search-vs-btn">
            <input
              className="input"
              type="text"
              placeholder="Search for words"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className="search-btn" onClick={Search}>
              Search
            </button>
          </div>
        </div>
        <div class="main">
          {word === "" ? (
            <Select all={all} main={main} />
          ) : (
            <div className="type-word">type a word in the box</div>
          )}
        </div>
      </div>
    </>
  );
}
