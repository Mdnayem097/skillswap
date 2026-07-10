# ⚡ SkillSwap - Live 1-on-1 Tech Mentorship Platform

SkillSwap is a modern, full-stack mentorship marketplace built with **Next.js 15 (App Router)** and **MongoDB**. It bridges the gap between industry experts and learners by allowing verified mentors to publish flexible, live performance slots and letting learners book interactive 1-on-1 sessions instantly to unblock their technical roadmaps.

---

## 🚀 Key Features

### 👤 User & Authentication
- **Role-Based Access Control:** Dual-role architecture for **Mentors** and **Learners**.
- **Secure Authentication:** Managed via secure **JWT (JSON Web Tokens)** stored safely in HTTP-only cookies.
- **Protected Sessions:** Centralized `authProxy` verification guarding backend routes.

### 📅 Mentor Dashboard (Full CRUD)
- **Slot Management:** Create, read, update/edit, and delete live 1-on-1 mentorship slots dynamically.
- **Incoming Bookings Tracker:** Real-time visibility into which learner has booked which specific slot, showing raw buyer data and total paid amounts.

### 🔍 Discovery & Engagement
- **Interactive Exploration:** Filterless dynamic grid showing all live available sessions across tech industries.
- **Deep-Dive Details:** Custom page mapping duration, pricing, categories, and direct slot-booking CTA.
- **Instant Booking Engine:** One-click session scheduling connecting learners directly to data records.

### 🎨 Design & Experience
- **Modern UI/UX:** Clean Minimalist Slated Theme (`#f8fafc`) built entirely on top of Tailwind CSS.
- **Futuristic Banner:** Ambient-glow terminal console integration mimicking top tech platforms like Vercel and Linear.
- **Contact Desk:** Fully functional static inquiry intake dashboard with success state routing.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** Next.js 15 (React 19, TypeScript)
- **Styling Utility:** Tailwind CSS
- **Database Engine:** MongoDB Atlas (Cloud Instance)
- **ODM Layer:** Mongoose
- **Session Control:** Jose / Native JWT Management

---

## ⚙️ Local Development Setup

Follow these exact steps to clone, configure, and spin up the environment on your local terminal:

### 1. Clone the Repository
```bash
git clone <your-github-repository-url>
cd skillswap