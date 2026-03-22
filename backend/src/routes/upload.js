import express from 'express';
import multer from 'multer';
import { processDocument } from '../services/embedding.js';
import fs from 'fs';

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  } else {
    // Move the file to a permanent location
    const filePath = req.file.path;

    await processDocument(filePath);

    res.json({ message: 'File uploaded and processed successfully' });
    
  }
});

export default router;