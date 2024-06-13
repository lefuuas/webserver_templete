import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonPath = path.join(__dirname, "../jsons/exemple.json");


export async function Homeget(req, res) {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Não foi possivel ler o Arquivo' });
        }
        const jsonData = JSON.parse(data);
        const names = jsonData.map(item => item.name);
        res.json(names);
    });
}


