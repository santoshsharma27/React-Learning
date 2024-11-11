import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MemeCard from "./MemeCard";

function Home() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1); // Add a page state to control pagination

  async function fetchMemes() {
    try {
      setIsLoading(true);
      const res = await fetch(`https://meme-api.com/gimme/20?page=${page}`);

      if (!res.ok) throw new Error("Something went wrong with fetching memes");

      const data = await res.json();
      setMemes((prevMemes) => [...prevMemes, ...data.memes]);
      setPage((prevPage) => prevPage + 1); // Increment page for next fetch
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMemes();
  }, []); // Only call on initial render

  useEffect(() => {
    const handleScroll = () => {
      //scrollY - how much I have scrolled
      // innerHeight - height of the window(visible setion)
      // document.body.scrollHeight - total height of the web page
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 100
      ) {
        fetchMemes();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {memes.map((meme, i) => (
        <MemeCard key={i} meme={meme} />
      ))}

      {isLoading && <Shimmer />}
    </div>
  );
}

export default Home;
