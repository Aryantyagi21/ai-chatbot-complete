const faqData = require('../faqData'); // Go one level up to access faqData.js

function chatbotLogic(message) {
  const lowerMsg = message.toLowerCase().trim();

  for (const item of faqData) {
    if (lowerMsg.includes(item.question)) {
      return item.answer;
    }
  }

  return '❌ Sorry, I do not understand the question.';
}

module.exports = chatbotLogic;
