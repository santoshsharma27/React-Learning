/* eslint-disable react/prop-types */
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
    </div>
  );
}

export default MemeCard;
