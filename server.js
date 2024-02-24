import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Route Ranker app listening at http://localhost:${port}`);
});
