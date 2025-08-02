# 🤖 AI Chatbot with Custom API & GitHub Actions CI/CD

A fully Dockerized AI FAQ Chatbot deployed on AWS EC2 with GitHub Actions CI/CD — built for demonstrating DevOps best practices.

## 🚀 Project Overview

This project is a custom-built AI chatbot powered by a Node.js backend and deployed automatically on AWS EC2 using GitHub Actions. No external AI APIs (like OpenAI) are used — the Q&A logic is homegrown. Ideal for interview portfolios in DevOps.

## 🚀 Project Summary

- Developed a custom AI chatbot using Node.js and Express.
- Containerized with Docker and deployed on AWS EC2.
- Managed environment variables securely with `.env` and `keys.json`.
- Placeholder GitHub Actions CI/CD pipeline included for automated deployment.
---

## 🚀 Features

- Chat interface (HTML + Node.js backend)
- Processes natural language queries using ChatGPT API
- Easily deployable on cloud servers (like AWS EC2)
- Clean folder structure and easy setup

---

## 🧰 Tech Stack

| Category     | Tools Used                                 |
|--------------|---------------------------------------------|
| Cloud        | AWS EC2 (Ubuntu)                           |
| Language     | Node.js (JavaScript)                       |
| Container    | Docker                                     |
| CI/CD        | GitHub Actions                             |
| Versioning   | Git + GitHub                               |
| Secrets Mgmt | GitHub Secrets, `.env`, `keys.json`        |
| Deployment   | SSH-based automation to EC2                |

---

## 🛠️ Features Implemented

- 🔒 Secure custom API for chatbot logic
- 🐳 Dockerized with production-ready `Dockerfile`
- 🚀 GitHub Actions for automatic deployment
- 🔐 Encrypted secrets using GitHub Secrets
- 📡 Running on live AWS EC2 with SSH automation
- 🧠 Custom Q&A logic (no LLM dependency)

---

## 🧪 CI/CD Pipeline Flow

```yaml
Trigger: Push to main/master branch

Steps:
1. Checkout Code
2. Start SSH Agent & Load Private Key
3. SSH into EC2
4. Pull Latest Code
5. Stop & Remove Existing Docker Container
6. Rebuild & Run Dockerized Chatbot


---

## 📁 Folder Structure
custom-api-chatbot/
├── index.js
├── faqData.js
├── Dockerfile
├── .env           # (gitignored)
├── keys.json      # (gitignored)
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml

---

## ⚙️ Installation & Setup

# 1. Clone the repository
git clone https://github.com/Aryantyagi21/ai-chatbot-openai.git
cd ai-chatbot-openai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# Edit .env and add your OpenAI API key like:
# OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 4. Start the backend server
node index.js

# 5. Open the chatbot
Open the file 'frontend.html' in your browser to use the chatbot.

## Security Notes
⚠️ Never commit actual API keys or credentials to your GitHub repository.

Best practices:

✅ Use a .env file to store your secrets securely.

✅ Add .env to your .gitignore file.

❌ Don't hardcode API keys in your index.js or frontend code.

✅ Share .env.example (with no real key) to guide others.

If you accidentally pushed your secret:

Use GitHub Push Protection to unblock or revoke the key.

Remove it from git history with tools like BFG Repo-Cleaner.

Regenerate the API key from OpenAI Dashboard.

👤 Author
Aryan Tyagi
www.linkedin.com/in/aryantyagi1805
📧 Email:tyagiaryanpnp18@gmail.com
🔗 LinkedIn
