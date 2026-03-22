import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

import { Ollama } from "@langchain/ollama";

const llm = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "phi3:mini",
  temperature: 0.7,
  maxTokens: 200,
});

export async function callLLM(prompt) {
  console.log('Calling LLM with prompt:', prompt);
  return await llm.invoke(prompt);
}

/*
export async function callLLM(prompt, retries = 3) {
    const response = await axios.post("http://localhost:11434/api/generate", {
    model: "phi3:mini",
    prompt: prompt,
    stream: false,
  });

  return response.data.response;
}
  */


/*
const llm = new HuggingFaceInference({
    //model: 'microsoft/phi-3-mini-4k-instruct',
    //model: "HuggingFaceH4/zephyr-7b-beta",
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    apiKey: process.env.HUGGINGFACE_API_KEY,
    parameters: {
        max_new_tokens: 200,
        temperature: 0.7,
    },
});

export async function callLLM(prompt, retries = 3) {
    try {
        const response = await llm.call(prompt);
        return response;
    } catch (error) {
      console.warn(`LLM call failed, retrying... (${retries} attempts left)`);
        if (retries > 0) {
            // Simple retry logic
            await new Promise((r) => setTimeout(r, 2000));
            callLLM(prompt, retries - 1);
        }
    }
}
    */

/*
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL_URL =
  "https://api-inference.huggingface.co/models/microsoft/phi-3-mini-4k-instruct";

export async function callLLM(prompt, retries = 3) {
  try {
    const response = await axios.post(
        MODEL_URL, 
        { 
            prompt: prompt,
            parameters: {
                max_new_tokens: 200,
                temperature: 0.7,
            }
         }, 
         {
             headers: {
                 'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json'
             }
         });
        return response.data[0]?.generated_text || JSON.stringify(response.data);

  } catch (error) {
    if (retries > 0) {
      console.warn(`LLM call failed, retrying... (${retries} attempts left)`);
      await new Promise((r) => setTimeout(r, 2000));
      return callLLM(prompt, retries - 1);
    }
    console.error('Error generating response from LLM:', error);
    throw error;
  }
}
  */