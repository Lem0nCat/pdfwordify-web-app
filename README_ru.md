# PDFWordify Web App

## Описание
PDFWordify Web App - это веб-приложение, предназначенное для преобразования PDF файлов в редактируемые документы Microsoft Word (.docx). Приложение использует библиотеку конвертирования PDFWordify, находящуюся в репозитории [pdfwordify](https://github.com/Lem0nCat/pdfwordify), чтобы обеспечить высококачественное преобразование с минимальными потерями форматирования.

## Основные функции
- **Конвертация PDF в Word**: Быстрое преобразование PDF файлов в формат .docx.
- **Обработка изображений**: Использование OCR для распознавания текста в изображениях.

## Основные требования
- Python 3.10+
- [Ghostscript](https://www.ghostscript.com/)
- [Google tesseract OCR](https://github.com/tesseract-ocr/tesseract)
- [pdfwordify](https://github.com/Lem0nCat/pdfwordify)

## Установка
1. **Клонирование репозитория:**
    ```bash
    git clone https://github.com/Lem0nCat/pdfwordify-web-app.git
    cd pdfwordify-web-app
    ```

2. **Установка Ghostscript:**
    - Для Windows: загрузите и установите Ghostscript с [официального сайта](https://www.ghostscript.com/download.html).
    - Для MacOS: используйте Homebrew:
      ```bash
      brew install ghostscript
      ```
    - Для Linux:
      ```bash
      sudo apt-get install ghostscript
      ```

3. **Установка Tesseract OCR:**
    - Для Windows: загрузите и установите Tesseract OCR с [официального сайта](https://github.com/tesseract-ocr/tesseract/wiki).
    - Для MacOS: используйте Homebrew:
      ```bash
      brew install tesseract
      ```
    - Для Linux:
      ```bash
      sudo apt-get install tesseract-ocr
      ```

4. **Создание виртуального окружения и установка зависимостей:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Для Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

5. **Запуск приложения:**
    ```bash
    python manage.py runserver
    ```

## Использование
1. Перейдите по адресу из консоли в вашем веб-браузере.
2. Загрузите PDF файл, который вы хотите преобразовать.
3. Нажмите кнопку "Конвертировать" и дождитесь завершения процесса.
4. Скачайте преобразованный файл .docx.


## Лицензия
Этот проект лицензирован под лицензией GNU General Public License v3.0. Подробности см. в файле `LICENSE`.
