import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg rounded-xl border border-gray-300 bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          The page you are looking for could not be found 😢.
        </p>
        <Link
          to="/"
          className="rounded-full bg-blue-600 px-4 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
