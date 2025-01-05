const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const removeButton = document.getElementById("removeButton");
const fileNameDisplay = document.getElementById("fileName");
const uploadText = document.getElementById("uploadText");

// Handle drag and drop events
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragging");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragging");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragging");
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFileUpload(files[0]);
  }
});

// Open file picker when clicking the text link
uploadText.addEventListener("click", () => {
  fileInput.click();
});

// Handle file input change
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    handleFileUpload(fileInput.files[0]);
  }
});

// Handle file upload
function handleFileUpload(file) {
  fileNameDisplay.textContent = `Uploaded: ${file.name}`;
  fileNameDisplay.classList.remove("hidden");
  removeButton.classList.remove("hidden");
}

// Remove uploaded file
removeButton.addEventListener("click", () => {
  fileInput.value = ""; // Clear file input
  fileNameDisplay.textContent = ""; // Clear file name display
  fileNameDisplay.classList.add("hidden");
  removeButton.classList.add("hidden");
});
