function Shimmer() {
  return Array(15)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="border-gray m-5 rounded-lg border p-5">
        <div className="h-64 w-64 rounded-lg bg-gray-200"></div>
      </div>
    ));
}
export default Shimmer;
