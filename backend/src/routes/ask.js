import express from 'express';
import { askQuestion } from '../services/rag.js';

const router = express.Router();

// Route to handle question asking
router.post('/', async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  console.log('Received query:', query);
  const result = await askQuestion(query);
    console.log('Generated answer:', result);
    res.json(result);
    });

export default router;