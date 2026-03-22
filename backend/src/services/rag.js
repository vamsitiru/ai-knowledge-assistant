import { queryVectorStore } from './vectorStore.js';
import { callLLM } from './llm.js';


export async function askQuestion(query) {
  // Query the vector database for relevant documents
  const docs = await queryVectorStore(query);

  const context = docs.slice(0, 2).map(doc => doc.pageContent).join('\n');

    // Create a prompt for the LLM
    const prompt = `Answer based only on context: ${context}\n\nQuestion: ${query}\nAnswer:`;

    // Call the LLM with the prompt
    const llmResponse = await callLLM(prompt);
    return { llmResponse , sources: docs};
}