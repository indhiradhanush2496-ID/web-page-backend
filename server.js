const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Optional: root route for testing
app.get('/', (req, res) => {
  res.send("Backend is running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

