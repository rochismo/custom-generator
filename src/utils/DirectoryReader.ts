import * as fs from 'fs';
import { join } from 'path';

const getAbsolutePath = (path: string) => join(process.cwd(), path);
const readJson = (path: string)  => JSON.parse(fs.readFileSync(path, 'utf8'));

export function readDirectoryContents(path: string) {
    if (!fs.existsSync(path)) {
        throw new Error("Directory does not exist");
    }
    return fs.readdirSync(path);
}



export function getMetadata(path: string = '.') {
    const absolutePath = getAbsolutePath(path);
    const contents = readDirectoryContents(absolutePath);
    const metadata = contents.find(file => file.includes(".metadata"));
    if (!metadata) {
        throw new Error("Metadata not found");
    }
    return readJson(join(absolutePath, metadata));
}