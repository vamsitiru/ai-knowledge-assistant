Version 1:
Chroma embeddigns & LLM
In-memory vector store
P.S :
Tried with Vertex AI, Hugging face but none of them given good support for test & trial purpose with free of cost.
Eventually endedn up with local Chroma LLM installation for hands-on.
ollama pull phi3:mini  (Ollama LLM)
  ollama run phi3:mini
   curl http://localhost:11434/api/generate \
  -d '{
    "model": "phi3:mini",
    "prompt": "Explain microservices simply",
    "stream": false
  }'
ollama pull nomic-embed-text  (for Ollama embeddings)

Run:
ollama serve
npm start backend
npm start frontend
