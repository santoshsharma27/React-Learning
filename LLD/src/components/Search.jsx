import { useEffect, useState, useCallback } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState(null);

  // Debounced function for handling search
  const debouncedFetch = useCallback(() => {
    const id = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(id);
  }, [searchText]);

  async function fetchData() {
    if (!searchText.trim()) return;

    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
      setIsResultVisible(true);
    } else {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`,
          { signal },
        );

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        // Update cache using a functional approach
        setCache((prevCache) => ({ ...prevCache, [searchText]: data[1] }));
        setSearchResults(data[1]);
        setIsResultVisible(true);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch suggestions");
          console.log(err.message);
        }
      } finally {
        setIsLoading(false);
      }

      return () => controller.abort(); // Clean up if the component unmounts or if searchText changes
    }
  }

  useEffect(() => {
    debouncedFetch();
  }, [searchText, debouncedFetch]);

  function selectSuggestion(e) {
    if (e.target.tagName === "LI") {
      const suggestion = e.target.getAttribute("data-suggestion");
      setSearchText(suggestion);
      setSelectedValue(suggestion);
      setSearchResults([]);
      setIsResultVisible(false);
    }
  }

  function handleBlur() {
    setTimeout(() => {
      setIsResultVisible(false);
    }, 200); // Delay hiding to allow clicks on suggestions
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
        onBlur={handleBlur}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {searchResults.length > 0 && isResultVisible && (
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
