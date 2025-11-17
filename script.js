function downloadFile() {
  const dropdown = document.getElementById("fileDropdown");
  const selectedFile = dropdown.value;

  if (selectedFile) {
    // Replace with actual file paths or server logic
    window.location.href = selectedFile;
  } else {
    alert("Please select a file first!");
  }
}
