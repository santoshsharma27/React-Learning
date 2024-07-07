import { useEffect, useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  const [selectedValue, setSelectedValue] = useState("");

  async function fetchData() {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`,
        );
        if (!res.ok) throw new Error("Something went wrong with fetching data");
        const data = await res.json();
        cache[searchText] = data[1];
        setSearchResults(data[1]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    // Debouncing
    const id = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(id);
  }, [searchText]);

  function selectSuggestion(e) {
    if (e.target.tagName === "LI") {
      const suggestion = e.target.getAttribute("data-suggestion");
      setSearchText(suggestion);
      setSelectedValue(suggestion);
      setSearchResults([]);
      setIsResultVisible(false);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <input
        type="text"
        className="h-8 w-96 rounded-full border border-black p-6 shadow-lg"
        placeholder="Search Google or type a URL"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        //onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul
          className="w-96 rounded-lg border border-black p-2 shadow-lg"
          onClick={selectSuggestion}
        >
          {searchResults.map((r) => (
            <li
              className="cursor-pointer hover:bg-gray-200"
              key={r}
              data-suggestion={r}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
