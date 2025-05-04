import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleFileUpload() {
    if (!file) return;

    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });

      setStatus("success");
      setUploadProgress(100);
    } catch (error) {
      console.error("Upload failed:", error);
      setStatus("error");
      setUploadProgress(0);
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl border bg-white p-6">
      <label
        htmlFor="fileUpload"
        className="block text-sm font-medium text-gray-700"
      >
        Choose a file:
      </label>
      <input
        id="fileUpload"
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
      />

      {file && (
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <strong>Name:</strong> {file.name}
          </p>
          <p>
            <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
          </p>
          <p>
            <strong>Type:</strong> {file.type}
          </p>
        </div>
      )}

      {status === "uploading" && (
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{uploadProgress}% uploaded</p>
        </div>
      )}

      {file && status !== "uploading" && (
        <button
          onClick={handleFileUpload}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Upload
        </button>
      )}

      {status === "success" && (
        <p className="text-sm text-green-600">✅ File uploaded successfully!</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          ❌ Upload failed. Please try again.
        </p>
      )}
    </div>
  );
}

export default FileUpload;
