import { dirname, join } from "node:path"
import { fileURLToPath } from 'node:url'
import { writeFile } from 'node:fs';
import parser from 'tree-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectDir = join(__dirname, '..');
const menuFile = join(projectDir, 'src/assets/menu.json');

const tree = parser(join(projectDir, 'public/assets'));

writeFile(menuFile, JSON.stringify(tree), 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data written to file');
    }
});
