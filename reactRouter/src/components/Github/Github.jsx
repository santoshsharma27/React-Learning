import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/santoshsharma27")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="m-4 bg-gray-600 p-4 text-center text-3xl text-white">
      {data ? (
        <>
          <p>GitHub Followers: {data.followers}</p>
          <img src={data.avatar_url} alt="GitHub avatar" width={300} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/santoshsharma27",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { followers: "Data unavailable", avatar_url: "" };
  }
};
