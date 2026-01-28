text
🛒 ELITE FASHION - Full-Stack React E-Commerce

A production-ready e-commerce platform built step-by-step with **Flux Architecture**, **Protected Routing**, and **AI-Powered Skin-Tone Recommendations**.

[![React](https://img.shields.io/badge/React-18.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-orange?style=flat&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6+-yellow?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


| Technology          | Purpose             | Key Benefit                                            |
| ------------------- | ------------------- | ------------------------------------------------------ |
| **React             | Component Framework | High performance + reusable UI components              |
| **Flux (Custom)**   | State Management    | Centralized sync for **Cart & Auth** states            |
| **React Router v6** | SPA Routing         | Smooth navigation + protected route guards             |
| **Formik + Yup**    | Forms & Validation  | Clean form handling + schema-based validation security |
| **CSS Variables**   | Theme System        | Smooth **Light / Dark theme** transitions              |
| **Vite**            | Build Tool          | Lightning-fast development with HMR                    |


---

## 🏗️ 4-Phase Development Roadmap

| Phase | Focus | Key Deliverables | Status |
|-------|-------|------------------|--------|
| **Phase 1** | Static UI | Zomato-style Layout, 100% Responsive | ✅ Complete |
| **Phase 2** | Dynamic Data | JSON Integration, Cart Logic | ✅ Complete |
| **Phase 3** | Security | Auth HOC, Protected Routes, Yup Validation | ✅ Complete |
| **Phase 4** | Advanced | Flux Stores, Theme Switch, GlowMate AI | ✅ Complete |

### Phase Highlights
- **Phase 1**: Mobile-first design with Hero, Navbar, Product Cards
- **Phase 2**: Real-time cart with quantity controls & totals
- **Phase 3**: HOC pattern for authentication guards
- **Phase 4**: **GlowMate** - Personalized skin-tone recommendations

---

## ✨ Core Features

| Feature | Description | Tech Used |
|---------|-------------|-----------|
| **🛒 Smart Cart** | Add/Remove/Update with live totals | Flux CartStore |
| **🔐 Auth Guard** | Login/Register + Route Protection | HOC + Yup |
| **🌙 Theme Switch** | Dark/Light mode toggle | CSS Variables |
| **🎨 GlowMate AI** | Skin-tone based product recommendations | Custom Logic |
| **📱 Responsive** | Perfect on all devices | CSS Grid/Flexbox |

---

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/yourusername/elite-fashion.git
cd elite-fashion
npm install

# Development Server
npm run dev

# Build for Production
npm run build
Live Demo: http://localhost:5173


📁 Project Structure
text
src/
├── components/
│   ├── common/     # Navbar, Footer, Hero
│   ├── auth/       # Login, Register
│   ├── shop/       # Products, Cart
│   └── ai/         # GlowMate
├── stores/         # Flux Stores
├── data/           # JSON Files
└── styles/         # CSS Variables
🤝 Contributing
Fork the repository

Create feature branch: git checkout -b feature/amazing-feature

Commit changes: git commit -m 'feat: add amazing feature'

Push: git push origin feature/amazing-feature

Open Pull Request

