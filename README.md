DeliveryPilot AI

A 4-in-1 AI-powered automation suite for Business Analysts



&#x20;THIS is a concept prototype built for demonstration purposes only. Any organizational names used are purely symbolic and for contextual framing. This project is not affiliated with, endorsed by, or representative of any real company or enterprise.





What is DeliveryPilot AI?

DeliveryPilot AI is a browser-based tool that eliminates the repetitive documentation work BAs deal with every sprint. Paste raw input, click a button, get structured output — no login, no setup, no fluff.

It was built as a proof of concept to explore how AI can fit into a BA's day-to-day workflow in a practical, lightweight way.



Features

TabWhat it doesMeeting NotesExtracts action items with owners, due dates, and priority tags from raw meeting notesUser StoriesGenerates primary + secondary user stories and acceptance criteria from a feature descriptionStatus ReportProduces a structured On Track / At Risk / Delayed sprint status report with blockersStakeholder EmailDrafts a polished stakeholder email ready to send in one click



Tech Stack



Frontend — HTML, CSS, Vanilla JS (single file, zero dependencies)

Backend — Node.js + Express

AI Engine — Google Gemini 2.5 Flash API

Hosting — Render.com (auto-deploys from GitHub)





Local Setup

Prerequisites



Node.js (v18+)

A Gemini API key — get one free at aistudio.google.com



Steps

bash# Clone the repo

git clone https://github.com/YashKolekarDE/Delivery-Pilot-AI.git

cd Delivery-Pilot-AI



\# Set up environment

cd backend

cp .env.example .env

\# Add your GEMINI\_API\_KEY to the .env file



\# Install and run

npm install

npm start

Then open frontend/index.html in your browser — or just go to http://localhost:3000.



Deployment

This project is deployed on Render. The backend serves the frontend statically, so a single web service handles everything.

Live demo: https://delivery-pilot-ai.onrender.com



Note: Free tier on Render spins down after inactivity. First load may take \~30 seconds.





Project Structure

Delivery-Pilot-AI/

├── backend/

│   ├── server.js         # Express server + Gemini API integration

│   ├── package.json

│   └── .env.example      # Environment variable template

├── frontend/

│   └── index.html        # Full UI (single file)

├── Dockerfile

├── render.yaml

└── README.md



Disclaimer

This is a personal prototype built to demonstrate a concept. It is not a production tool. Any references to organizations, teams, or projects within the UI are purely symbolic and used for illustrative purposes only. This project does not represent, imply, or claim any affiliation with any real organization.



Credits

Built with curiosity and too many late nights by:

Yash Kolekar — concept, frontend, integration, deployment

Sebanti Sengupta — backend architecture, Gemini API integration, deployment guidance



DeliveryPilot AI — v5 · 2026

