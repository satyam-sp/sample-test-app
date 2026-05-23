# 🛸 TEST.IO // Monorepo Workspace

An immersive, responsive digital ecosystem featuring a procedural 3D UFO simulation environment integrated with an atomic, state-driven real-time Notes CRUD application platform.

---

## 🛠️ Tech Stack Matrix

### Frontend Shell
* **UI Canvas Integration:** React (TypeScript)
* **3D Execution Graphics Engine:** Three.js via `@react-three/fiber` & `@react-three/drei`
* **Atomic State Node Handler:** Zustand (Decoupled background updates)
* **Fluid Modular Layout Styling:** Styled Components (Rose-Gold / Metallic Pink theme adaptation)
* **Client-Side Page Routing Engine:** React Router DOM (Persistent Viewport Layout Structure)

### Backend Services Core
* **Application Framework Container:** Express.js (Node.js runtime environment)
* **Database Management Architecture:** MongoDB via Mongoose Object Modeling
* **API Route Serialization Protocol:** RESTful JSON endpoints (`/api/notes`)

---

## 📁 Repository Structural Architecture
SAMPLE-NOTES/
├── backend/                  # Express.js Server Engine
│   ├── bin/                  # Executable start scripts (www)
│   ├── config/               # Database structural connections
│   ├── controllers/          # Request logic handlers
│   ├── models/               # Mongoose data schemas (Note model)
│   ├── public/               # Static backend assets
│   ├── routes/               # Express REST API endpoints (/api/notes)
│   ├── views/                # Render views / fallback templates
│   ├── .env                  # Port configurations & Database keys
│   ├── app.js                # Primary application configuration hub
│   └── package.json          # Backend runtime scripts & dependencies
│
├── src/                      # Frontend Application Context (Vite/React)
│   ├── assets/               # Branding images, global styles
│   ├── components/           # HeroCanvas (3D UFO), Feature Section elements
│   ├── layouts/              # RootLayout.tsx (Persistent navbar framework)
│   ├── pages/                # LandingPage.tsx, NotesPage.tsx (CRUD UI)
│   ├── store/                # themeStore.ts & notesStore.ts (Zustand node stores)
│   ├── App.css               # Specific core styling overrides
│   ├── App.tsx               # Main client routing engine switchboard
│   ├── index.css             # Tailwind base layers / global parameters
│   └── main.tsx              # Application client DOM rendering mount
│
├── index.html                # Vite entry template layout
├── package.json              # Frontend workspace scripts & configurations
├── README.md                 # Project operational blueprint documentation
└── vite.config.ts            # Vite bundler specific configurations

for launch 

npm run dev

## Backend

cd backend
npm install

#.env

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/test_notes

#for Launch
npm run dev




