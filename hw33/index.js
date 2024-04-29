const fs = require('fs');

function copyFile(fileToCopy, copiedFile) {
    
    fs.readFile(fileToCopy, (err, data) => {
        if (err) {
            console.error(`Помилка при зчитуванні файлу ${fileToCopy}: ${err.message}`);
        } else {
            fs.writeFile(copiedFile, data, (err) => {
                if (err) {
                    console.error(`Помилка при записі у файл ${copiedFile}: ${err.message}`);
                } else {
                    console.log(`Файл ${fileToCopy} успішно скопійовано в ${copiedFile}`);
                }
            });
        }
    });
}

const fileToCopy = './hw32/input.txt';
const copiedFile = './hw32/output.txt';
copyFile(fileToCopy, copiedFile);
