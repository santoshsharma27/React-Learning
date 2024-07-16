function ProductCard({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) {
  return (
    <div className="border-gray m-2 w-[300px] cursor-pointer rounded-lg border p-4 text-center">
      <img className="h-48 w-60 object-fill" alt={title} src={thumbnail} />
      <h2 className="w-60 p-2 text-xl font-bold">
        {id} - {title}
      </h2>
      <h2 className="p-1 text-lg font-medium">
        Rs. {Math.round(price)} - dicount of {Math.round(discountPercentage)}%
      </h2>
      <p className="text-md w-60 p-1 text-sm">{description}</p>
    </div>
  );
}
export default ProductCard;
