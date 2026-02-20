# 🌙 PILOTIAN'19 — SSC Batch Iftar Party

A modern event website for the **SSC 2019 Batch (Pilotian'19)** Iftar Party reunion, built with React + Vite + TypeScript.

---

## 🚀 Live Demo

> Deployed on **Vercel** — auto-deploys from `main` branch.

---

## ✨ Features

- **Welcome Page** — Animated landing screen with emerald theme, high-five stick figure animation, and event info card
- **Hero Section** — Event details, date/time, and call-to-action
- **Packages** — Iftar package tiers with pricing
- **Photo Album** — Interactive slider with `< >` navigation, full-screen lightbox, keyboard support (← → Esc), and thumbnail strip
- **Registration Form** — Member sign-up with Google Sheets backend
- **Contact Section** — Contact info and social links
- **Responsive Design** — Mobile-first, works on all screen sizes

---

## 🛠️ Tech Stack

| Tech                           | Usage                   |
| ------------------------------ | ----------------------- |
| React 18                       | UI Framework            |
| Vite                           | Build Tool              |
| TypeScript                     | Type Safety             |
| Tailwind CSS v4                | Styling                 |
| Framer Motion (`motion/react`) | Animations              |
| Lucide React                   | Icons                   |
| React Router DOM               | Client-side Routing     |
| Google Apps Script             | Form Submission Backend |

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── WelcomePage.tsx     # Landing screen (inline styles — Tailwind bypass)
│   └── EventPage.tsx       # Main event page
├── components/
│   ├── Navigation.tsx      # Top navbar (PILOTIAN'19 brand)
│   ├── Hero.tsx            # Event hero section
│   ├── Packages.tsx        # Package cards
│   ├── Album.tsx           # Photo gallery with lightbox
│   ├── RegistrationForm.tsx
│   ├── Footer.tsx
│   └── ...
├── assets/                 # Event photos (1-5.jpeg)
└── main.tsx                # App entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📸 Album Features

- Manual `< >` arrow buttons to switch photos
- Click **"🔍 View Full Image"** to open fullscreen lightbox
- **Back to Home** button always visible
- Keyboard navigation: `←` `→` to browse, `Esc` to close
- Thumbnail strip for quick photo jumping

---

## 📋 Google Sheets Integration

Registration form data is submitted to a Google Apps Script web app and stored in a Google Sheets spreadsheet. See [`google-apps-script/Code.gs`](google-apps-script/Code.gs) for the backend script.

---

## 🎨 Theme

- **Primary Color**: Emerald (`#059669` / `#022c22`)
- **Accent**: Emerald 400 (`#34d399`)
- **Font**: System sans-serif stack

---

## 👥 Batch

**SSC 2019 — Pilotian'19**  
120+ Members · 27th Ramadan · Iftar Onwards

---

## 📄 License

Private project — SSC Batch 2019. All rights reserved.
