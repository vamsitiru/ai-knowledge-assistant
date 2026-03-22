# 🚀 RAG Interview Evaluator

---

<details>
<summary><b>📦 Version 1 – Local RAG Setup (Click to Expand)</b></summary>

<br/>

## 📌 Overview

* **LLM**: Ollama (phi3:mini)
* **Embeddings**: Chroma + Ollama (`nomic-embed-text`)
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

</details>

---

<details>
<summary><b>🚀 Version 2 – RAG with Evaluation Layer (Click to Expand)</b></summary>

<br/>

## 📌 Overview

* **LLM**: Ollama (phi3:mini)
* **Embeddings**: Chroma + Ollama (`nomic-embed-text`)
* **Vector Store**: In-memory
* **Evaluation Layer**: LLM-based (Answer scoring + PASS/FAIL decision)

---

## 🧠 What’s New in Version 2?

* ✅ Added **LLM-based evaluation layer**
* ✅ Supports **unstructured transcript → Q&A extraction**
* ✅ Scores candidate answers:

  * Correctness
  * Completeness
  * Clarity
* ✅ Generates **final hiring decision (PASS / FAIL)**

---

## 🏗️ Architecture Diagram

```mermaid
flowchart TD

A[User Input / Audio Transcript]
    --> B[Transcript Processing]

B --> C[Q&A Extraction (LLM)]
C --> D[Retriever (Chroma Vector DB)]
D --> E[Context + Question]

E --> F[LLM (Ollama)]
F --> G[Generated Answer]

G --> H[Evaluation Layer (LLM-as-Judge)]
H --> I[Scoring Engine]

I --> J[Final Result]
J --> K[PASS / FAIL + Feedback]

style H fill:#f9f,stroke:#333,stroke-width:2px
style I fill:#bbf,stroke:#333,stroke-width:2px
```

---

## ⚙️ Evaluation Flow

```text
Raw Transcript
   ↓
Q&A Extraction (LLM)
   ↓
Ideal Answer Generation (LLM)
   ↓
Answer Comparison
   ↓
Scoring (Correctness, Completeness, Clarity)
   ↓
Final Decision (PASS / FAIL)
```

---

## 📊 Scoring Logic

| Metric       | Weight |
| ------------ | ------ |
| Correctness  | 50%    |
| Completeness | 30%    |
| Clarity      | 20%    |

**PASS if score ≥ 3.5**
**FAIL if score < 3.5**

---

## ▶️ Run Application

```bash
ollama serve
npm start backend
npm start frontend
```

---

## 🧪 Example Output

```json
{
  "finalScore": 3.8,
  "decision": "PASS",
  "details": [
    {
      "question": "What is JVM?",
      "score": 4.2,
      "feedback": "Good understanding with correct fundamentals"
    }
  ]
}
```

---

## 🔥 Future Improvements

* 🔄 Replace LLM-generated ideal answers with RAG-based ground truth
* ⚡ Add streaming responses
* 📊 Add evaluation dashboard
* 🎤 Real-time voice interview + scoring

</details>

---
