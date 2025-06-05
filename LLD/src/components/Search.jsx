import { useEffect, useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchText.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      if (cache[searchText]) {
        setSearchResults(cache[searchText]);
        setShowResults(true);
        return;
      }

      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`,
          { signal },
        );

        if (!res.ok) throw new Error("Failed to fetch suggestions");

        const data = await res.json();

        setCache((prevCache) => ({ ...prevCache, [searchText]: data[1] }));
        setSearchResults(data[1]);
        setShowResults(true);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Error fetching data. Please try again.");
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce API call
    const timeoutId = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort(); // Clean up on unmount or text change
    };
  }, [searchText, cache]);

  function selectSuggestion(e) {
    if (e.target.tagName === "LI") {
      const suggestion = e.target.getAttribute("data-suggestion");
      setSearchText(suggestion);
      setSearchResults([]);
      setShowResults(false);
    }
  }

  function handleBlur() {
    setTimeout(() => setShowResults(false), 200); // Small delay for clicks
  }

  return (
    <div className="flex flex-col items-center pt-10">
      <input
        type="text"
        className="h-8 w-2/4 rounded-full border border-gray-200 p-6 shadow-lg focus:outline-hidden"
        placeholder="Search Google or type a URL"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={handleBlur}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {searchResults.length > 0 && showResults && (
        <ul
          className="w-2/4 rounded-lg border border-t-0 border-black p-2 shadow-lg"
          onClick={selectSuggestion}
        >
          {searchResults.map((result) => (
            <li
              className="cursor-pointer p-2 hover:rounded-full hover:bg-gray-100"
              key={result}
              data-suggestion={result}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
      <Tesco />
    </div>
  );
}

export default Search;
