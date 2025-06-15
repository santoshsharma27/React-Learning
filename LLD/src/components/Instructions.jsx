import { useEffect, useState } from "react";

function Instructions() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editCategoryName, setEditCategoryName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/epam-dotnet-lab/northwind-rest-api/categories",
        );
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  function handleDelete(id, name) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${name}?`,
    );
    if (confirmed) {
      setData((prevData) => prevData.filter((d) => d.categoryId !== id));
    }
  }

  function handleEdit(data) {
    setEditId(data.categoryId);
    setEditCategoryName(data.categoryName);
    setEditDescription(data.description);
  }

  function handleSave() {
    setData((prevData) =>
      prevData.map((item) =>
        item.categoryId === editId
          ? {
              ...item,
              categoryName: editCategoryName,
              description: editDescription,
            }
          : item,
      ),
    );
    setEditId(null);
    setEditCategoryName("");
    setEditDescription("");
  }

  function handleCancel() {
    setEditId(null);
  }

  return (
    <div className="m-8 flex flex-wrap justify-start pt-16">
      {data.map((d) => (
        <div key={d.categoryId} className="m-2 w-80 rounded-md border p-8">
          <p className="font-bold">CategoryId: {d.categoryId}</p>
          {editId === d.categoryId ? (
            <>
              <input
                className="mb-2 w-full rounded border p-2"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
              />
              <input
                className="mb-2 w-full rounded border p-2"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <button
                className="m-2 cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="m-2 cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>CategoryName: {d.categoryName}</p>
              <p>Description: {d.description}</p>
              <button
                className="m-2 cursor-pointer rounded border px-4 py-2"
                onClick={() => handleEdit(d)}
              >
                Edit
              </button>
              <button
                className="m-2 cursor-pointer rounded border bg-red-500 px-4 py-2 text-white"
                onClick={() => handleDelete(d.categoryId, d.categoryName)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Instructions;
