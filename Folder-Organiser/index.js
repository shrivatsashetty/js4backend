import fs from 'node:fs/promises';
import path from 'node:path';

const directoryPath = "./files/"


async function getDirContents(directoryPath) {
    try {
        const dirContents = await fs.readdir(directoryPath, {withFileTypes: true});

        const files = dirContents
            .filter((content) => content.isFile())
            .map((content) => content.name);

        const directories = dirContents
            .filter((content) => content.isDirectory())
            .map((content) => content.name);

        return {files, directories}
    } 
    catch (err) {
        console.error("Error:", err);
    }
}

async function main() {
    const dirContents = await getDirContents(directoryPath);
    let files = dirContents.files;

    for await (const file of files) {
        let fileExtension = path.extname(file);
        fileExtension = fileExtension.slice(1); // removes the dot (.)
        let subFolderPath = path.join(directoryPath, `${fileExtension}`);
        await fs.mkdir(subFolderPath, { recursive: true }); // creates directory if doesn't already exist
        let curreFilePath = path.join(directoryPath, file);
        let newFilePath = path.join(subFolderPath, file);
        await fs.rename(curreFilePath, newFilePath);
    }
    
}

await main();