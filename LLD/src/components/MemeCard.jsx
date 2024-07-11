function MemeCard({ meme }) {
  const { url, author } = meme;

  return (
    <div className="border-gray m-5 rounded-lg border p-5">
      <img className="h-64 w-64 rounded-lg" alt="meme" src={url} />
      <p className="pt-2">{author}</p>
    </div>
  );
}

export default MemeCard;
