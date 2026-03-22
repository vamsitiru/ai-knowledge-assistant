import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
// Import routes
import uploadRoute from './routes/upload.js';

// Use routes
app.use('/upload', uploadRoute);

import askRoute from './routes/ask.js';
app.use('/ask', askRoute);

app.listen(5005, () => {
  console.log('Server is running on port 5005');
});

export default app;