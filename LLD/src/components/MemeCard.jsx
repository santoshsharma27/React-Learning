function MemeCard({ meme }) {
  const { url, author, title } = meme;

  return (
    <div className="m-5 w-80 transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <img
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          alt="meme"
          src={url}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="truncate text-lg font-semibold text-gray-900">{author}</p>
        {title && (
          <p className="mt-1 truncate text-sm text-gray-600">{title}</p>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 p-4">
        <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          Like
        </button>
        <button className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">
          Share
        </button>
      </div>
    </div>
  );
}

export default MemeCard;
