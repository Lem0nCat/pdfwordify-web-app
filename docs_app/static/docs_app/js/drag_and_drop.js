const dropArea = document.querySelector('.drag-area'),
      input = document.querySelector('#pdfFile');

dropArea.addEventListener('click', () => input.click());

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dropArea.querySelector('p').textContent = "Release to upload the file";

    // Change Icon
    var icon = document.getElementById('dynamicIcon');
    icon.classList.replace('bi-file-earmark-pdf-fill', 'bi-file-earmark-arrow-down-fill');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    dropArea.querySelector('p').textContent = "Drag the PDF file here or click to select a file";
    
    // Change Icon
    var icon = document.getElementById('dynamicIcon');
    icon.classList.replace('bi-file-earmark-arrow-down-fill', 'bi-file-earmark-pdf-fill');
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    input.files = event.dataTransfer.files;
    dropArea.classList.remove('active');
    dropArea.querySelector('p').textContent = `File selected: ${input.files[0].name}`;
});

input.addEventListener('change', () => {
    if (input.files.length > 0) {
        dropArea.querySelector('p').textContent = `File selected: ${input.files[0].name}`;
    }
});
