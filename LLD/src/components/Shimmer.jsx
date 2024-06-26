function Shimmer() {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="m-4 h-[300px] w-[300px] rounded-lg bg-gray-100"
          ></div>
        ))}
    </div>
  );
}

export default Shimmer;
