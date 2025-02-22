function ProductCard({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) {
  // Check if discount percentage is a valid number
  const isValidDiscount = !isNaN(discountPercentage) && discountPercentage > 0;

  return (
    <div className="m-4 w-[300px] max-w-xs cursor-pointer rounded-lg border border-gray-300 shadow-lg transition-all duration-300 hover:shadow-xl">
      <img
        className="h-24 w-full rounded-t-lg object-cover"
        alt={title}
        src={thumbnail}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="truncate font-semibold text-gray-800">{title}</h2>
        <h3 className="mt-1 text-lg font-medium text-gray-600">
          ₹{Math.round(price)}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          {isValidDiscount && (
            <span className="rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white">
              {Math.round(discountPercentage)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
