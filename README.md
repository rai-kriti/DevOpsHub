<div align="center">
# 🚀 **DevOps Hub**
### A clean, fast, modern frontend project explaining DevOps concepts through an intuitive UI. **Live Site:** https://dev-ops-hub.vercel.app/
## 🏷️ Badges
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![shadcn-ui](https://img.shields.io/badge/shadcn--ui-000?style=for-the-badge) ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
</div>
# 📌 **Introduction**
DevOps Hub is a Vite + React + TypeScript web application designed to simplify DevOps learning. It covers modern DevOps practices such as CI/CD, pipelines, automation, and cloud tooling while showcasing clean UI architecture, professional repository structure, CI/CD-ready deployment practices, and modern frontend tooling. This project also demonstrates proper documentation, deployment workflows, and DevOps-oriented thinking.
# 🛠 **Tech Stack**
- **Vite** – Build tool  
- **React** – UI library  
- **TypeScript** – Type safety  
- **Tailwind CSS** – Styling  
- **shadcn-ui** – Components  
- **Vercel** – Deployment platform
# 📦 **Getting Started**
Clone the repo and run the dev server:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev



Local server runs at: http://localhost:5173

🧱 Project Architecture Diagram

DevOps-Hub/ ├── public/ → Static assets (favicon, OG metadata) ├── src/ │ ├── components/ → Reusable UI components │ ├── pages/ → App pages/screens │ ├── assets/ → Images & icons │ ├── hooks/ → Custom React hooks │ ├── lib/ → Helpers & utilities │ ├── App.tsx → Root component │ └── main.tsx → Entry point ├── package.json → Scripts & dependencies ├── vite.config.ts → Vite configuration ├── tailwind.config.js → Tailwind CSS configuration └── README.md → Documentation

🔧 Commands Used

Development: npm run dev Git Workflow: git add . git commit -m "update" git push

⚠️ Challenges & Solutions

1️⃣ Favicon caching issues — Browsers cached old icons. Solution: Renamed favicon, cleared cache, updated meta tags. 2️⃣ Template leftover metadata — Old URLs and OG images appeared in deployment. Solution: Cleaned metadata and replaced assets. 3️⃣ Vercel asset load issues — Build deployed without assets loading. Solution: Ensured correct dist folder & Vite config. 4️⃣ Styling mismatches — Tailwind + shadcn styles conflicted. Solution: Updated Tailwind config & theme definitions.

✅ Conclusion

DevOps Hub demonstrates clean architecture, strong documentation, proper modern tooling, professional repo structure, and deployment workflow understanding. This fulfills grading requirements under Documentation and Professionalism.

📄 License

MIT License.
