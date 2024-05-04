const dropArea = document.querySelector('.drag-area'),
      input = document.querySelector('#pdfFile');

dropArea.addEventListener('click', () => input.click());

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dropArea.querySelector('p').textContent = "Release to upload the file";
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    dropArea.querySelector('p').textContent = "Drag the PDF file here or click to select a file";
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
