import { useEffect, useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`,
        );
        if (!res.ok) throw new Error("Something went wrong with fetching data");
        const data = await res.json();
        console.log(data[1]);
        setSearchResults(data[1]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchText]);

  return (
    <div className="m-10">
      <input
        type="text"
        className="w-96 rounded-lg border border-black p-2 shadow-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="w-96 rounded-lg border border-black p-2 shadow-lg">
          {searchResults.map((r) => (
            <li className="cursor-pointer hover:bg-gray-200" key={r}>
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
