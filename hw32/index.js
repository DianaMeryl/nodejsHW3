const fs = require('fs');

function copyFile(fileToCopy, copiedFile) {
    try {
        const data = fs.readFileSync(fileToCopy);

        fs.writeFileSync(copiedFile, data);

        console.log(`Файл ${fileToCopy} успішно скопійовано в ${copiedFile}`);
    } catch (err) {
        console.error(`Помилка при копіюванні файлу: ${err.message}`);
    }
}

const fileToCopy = './hw32/input.txt';
const copiedFile = './hw32/output.txt';
copyFile(fileToCopy, copiedFile);
