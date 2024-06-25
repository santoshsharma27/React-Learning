import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MemeCard from "./MemeCard";

function Body() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMemes() {
    try {
      setIsLoading(true);
      const res = await fetch("https://meme-api.com/gimme/20");

      if (!res.ok) throw new Error("Something went wrong with fetching memes");

      const data = await res.json();
      // console.log(data);
      setMemes((memes) => [...memes, ...data.memes]);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMemes();
  }, [memes]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {memes.map((meme, i) => (
        <MemeCard key={i} meme={meme} />
      ))}

      {isLoading && <Shimmer />}
    </div>
  );
}

export default Body;
