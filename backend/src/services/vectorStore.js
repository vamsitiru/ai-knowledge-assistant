//import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OllamaEmbeddings } from '@langchain/ollama';
import { MemoryVectorStore } from '@langchain/classic/vectorstores/memory';

const embeddings = new OllamaEmbeddings({
      baseUrl: "http://localhost:11434",
      model: "nomic-embed-text",
});

let vectorStore;

export async function initStore() {
    /*
    vectorStore = await Chroma.fromDocuments([], embeddings, {
        collectionName: 'docs',
        url: undefined,
          persistDirectory: "./chroma_db",
    });
    */
   console.log('Initializing vector store with In-Memory embeddings...');
      vectorStore = await MemoryVectorStore.fromDocuments([], embeddings);
}

export async function addToVectorStore(docs) {
    if (!vectorStore) {
        await initStore();
    }
    console.log('Adding documents to vector store:', docs);
    await vectorStore.addDocuments(docs);
}

export async function queryVectorStore(query) {
    if (!vectorStore) {
        await initStore();
    }
    console.log('Querying vector store with query:', query);
    const results = await vectorStore.similaritySearch(query, 2);
    return results;
}

