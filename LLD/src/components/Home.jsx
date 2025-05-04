import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MemeCard from "./MemeCard";

function Home() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const fetchMemes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://meme-api.com/gimme/20?page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch memes");
      const data = await res.json();
      setMemes((prev) => [...prev, ...data.memes]);
      setPage((prev) => prev + 1);
      console.log(data.memes);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchMemes();
  }, []);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        !isLoading &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 100
      ) {
        fetchMemes();
      }
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, page]); // Track changes in isLoading and page

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {memes.length === 0 && isLoading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center pt-5">
          {memes.map((meme, i) => (
            <MemeCard key={i} meme={meme} />
          ))}
        </div>
      )}

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 rounded-full bg-blue-600 p-3 text-white shadow-md transition hover:bg-blue-700"
          title="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;
