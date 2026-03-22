# 🚀 Version 1 – Local RAG Setup

## 📌 Overview

* **LLM**: Ollama (phi3:mini)
* **Embeddings**:  Ollama (`nomic-embed-text`)
* **Vector Store**: In-memory

---

## 🧠 Notes

> Tried using Vertex AI and Hugging Face, but they did not provide sufficient free-tier support for experimentation and testing.
>
> Eventually switched to a **fully local setup using Chroma + Ollama** for better hands-on experience and control.

---

## ⚙️ Setup Instructions

### 1️⃣ Install & Run LLM (Ollama)

```bash
ollama pull phi3:mini
ollama run phi3:mini
```

---

### 2️⃣ Test LLM via API

```bash
curl http://localhost:11434/api/generate \
  -d '{
    "model": "phi3:mini",
    "prompt": "Explain microservices simply",
    "stream": false
  }'
```

---

### 3️⃣ Install Embeddings Model

```bash
ollama pull nomic-embed-text
```

---

## ▶️ Run the Application

```bash
ollama serve
npm start backend
npm start frontend
```

---

## 🧩 Tech Stack Summary

| Component    | Tool Used          |
| ------------ | ------------------ |
| LLM          | Ollama (phi3:mini) |
| Embeddings   | nomic-embed-text   |
| Vector Store | Chroma (in-memory) |
| Backend      | Node.js            |
| Frontend     | React              |

---
