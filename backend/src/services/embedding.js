import fs from 'fs';
import { splitter } from '../utils/splitter.js';
import { addToVectorStore } from './vectorStore.js';

export async function processDocument(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const chunks = await splitter.createDocuments([content]);
    await addToVectorStore(chunks);
}

