const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const chatbotLogic = require('./logic/chatbot.js'); // ✅ Import chatbot logic

const app = express();
const PORT = 3000;

// ✅ Middleware to parse JSON requests
app.use(bodyParser.json());

// ✅ Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Chat endpoint using chatbot logic
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  console.log("Received message from user:", userMessage);

  const botReply = chatbotLogic(userMessage); // ✅ Use logic-based response

  res.json({ reply: botReply });
});

// ✅ Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
