# 🚗 GearHub – Vehicle Inventory & Billing System

**GearHub** is a modern, all-in-one inventory and billing solution tailored for vehicle dealerships and service centers. With real-time data handling via Supabase, a beautiful and intuitive UI, and powerful features like category-based inventory, and advanced filtering — GearHub simplifies your daily operations and enhances customer service.

🔗 **Live Site**: [GearHub](https://gear-hub-zeta.vercel.app/)  
📂 **Source Code**: [GitHub](https://github.com/Suraj7299/GearHub)

---

## ✨ Features

📦 **Inventory Management** – Track vehicles, parts, or accessories with category-based organization.

🔍 **Advanced Filters & Search** – Locate any item in seconds with dynamic filtering and search.

📊 **Dashboard Insights** – Monitor Availibility, Sales, and customer trends at a glance.

🎨 **Responsive & Modern UI** – Built using `shadcn/ui`, Tailwind CSS, and Next.js 15 for a seamless experience.

🔐 **Authentication** – Secure user authentication powered by Clerk.

💾 **Real-Time Backend** – Supabase ensures real-time updates across all your devices.

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui  
- **Authentication**: Clerk  
- **Database**: Supabase (PostgreSQL + Realtime)  
- **Protection**:Arcjet
- **Deployment**: Vercel

---

## ⚙️ Installation & Setup

Follow these steps to get GearHub up and running locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/GearHub.git
cd GearHub
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
Create a .env.local file in the root directory with the following values:
```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL="your_postgresql_connection_string"
DIRECT_URL="your_direct_postgresql_connection_string"

# Gemini API (if using AI features)
GEMINI_API_KEY=your_gemini_api_key

# Arcjet (optional security layer)
ARCJET_KEY=your_arcjet_key
NODE_ENV=development

```
### 4️⃣ Start the Development Server
```bash
npm run dev
Now open your browser and navigate to:
👉 http://localhost:3000
```

---
🤝 Contributing

Contributions, issues, and feature suggestions are welcome!
Feel free to fork the repo, open an issue, or submit a pull request 🚀

---

📜 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE v3.

---
🧑‍💼 Author

Suraj Kumar
Thanks for checking out GearHub! Happy coding ✨

---          
