# PDFWordify Web App

## Description
PDFWordify Web App is a web application designed to convert PDF files into editable Microsoft Word documents (.docx). The application uses the PDFWordify conversion library from the [pdfwordify](https://github.com/Lem0nCat/pdfwordify) repository to ensure high-quality conversion with minimal formatting loss.

## Main Features
- **PDF to Word Conversion**: Quickly convert PDF files to .docx format.
- **Image Processing**: Use OCR to recognize text in images.

## Requirements
- Python 3.10+
- [Ghostscript](https://www.ghostscript.com/)
- [Google Tesseract OCR](https://github.com/tesseract-ocr/tesseract)
- [pdfwordify](https://github.com/Lem0nCat/pdfwordify)

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/Lem0nCat/pdfwordify-web-app.git
    cd pdfwordify-web-app
    ```

2. **Install Ghostscript:**
    - For Windows: download and install Ghostscript from the [official site](https://www.ghostscript.com/download.html).
    - For MacOS: use Homebrew:
      ```bash
      brew install ghostscript
      ```
    - For Linux:
      ```bash
      sudo apt-get install ghostscript
      ```

3. **Install Tesseract OCR:**
    - For Windows: download and install Tesseract OCR from the [official site](https://github.com/tesseract-ocr/tesseract/wiki).
    - For MacOS: use Homebrew:
      ```bash
      brew install tesseract
      ```
    - For Linux:
      ```bash
      sudo apt-get install tesseract-ocr
      ```

4. **Create a virtual environment and install dependencies:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # For Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

5. **Run the application:**
    ```bash
    python manage.py runserver
    ```

## Usage
1. Navigate to the address provided in the console using your web browser.
2. Upload the PDF file you want to convert.
3. Click the "Convert" button and wait for the process to complete.
4. Download the converted .docx file.

## License
This project is licensed under the GNU General Public License v3.0. See the `LICENSE` file for details.
