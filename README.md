# Kishore M — Personal Portfolio Website

A high-performance, cinematic personal portfolio website for **Kishore M** (Java Full Stack Developer), meticulously recreated from the design, layout, visual hierarchy, animations, and 3D background of the reference website [karthiktechy.netlify.app](https://karthiktechy.netlify.app/) and populated with authentic details from Kishore M's resume.

---

## 🚀 Tech Stack

- **Frontend Library:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS + Custom CSS Variables & Keyframe Animations
- **3D Cinematic Background:** Three.js (Binary code rain, wireframe glowing icosahedron, floating syntax symbols, perspective grids, connection lines, scroll camera keyframes)
- **Icons:** Lucide React & Handcrafted SVGs
- **Celebration Effects:** Canvas Confetti

---

## 📂 Project Structure

```
dai/
├── public/
│   ├── favicon.svg                # Red accent developer favicon
│   ├── Kishore_Resume.pdf         # Official downloadable resume PDF
│   └── images/
│       └── kishore.svg            # Stylized geometric developer avatar
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Site header with brand & menu toggle
│   │   ├── NavDrawer.jsx          # Slide-out drawer with navigation links
│   │   ├── Hero.jsx               # Hero section with 3D tilt card & status chips
│   │   ├── About.jsx              # About section, craft story & quick facts
│   │   ├── Education.jsx          # Academic background cards (B.E, HSC, SSLC)
│   │   ├── Skills.jsx             # Dual-direction infinite marquee & category grid
│   │   ├── Experience.jsx         # Career timeline with animated rail for Techvolt Software
│   │   ├── Projects.jsx           # Selected work: CRM System, WebInsurer, Boutique
│   │   ├── Certifications.jsx     # Verified credentials & Services ("How I can help")
│   │   ├── Contact.jsx            # Contact grid, quick links & interactive message form
│   │   ├── Footer.jsx             # Back-to-top button & copyright
│   │   ├── ResumeModal.jsx        # Dedicated modal to preview & download resume
│   │   ├── PrintableResume.jsx    # Print-optimized resume container for window.print()
│   │   ├── Splash.jsx             # Preloader with spinning rings & letter reveal
│   │   ├── ThreeBackground.jsx    # Three.js 3D interactive coding background
│   │   └── ScrollProgress.jsx     # Top reading progress indicator
│   ├── data/
│   │   └── portfolioData.js       # Centralized resume data for Kishore M
│   ├── App.jsx                    # Root application component
│   ├── index.css                  # Custom styles, CSS variables & animations
│   └── main.jsx                   # React DOM entry point
├── dist/                          # Production-ready build artifacts
├── index.html                     # HTML root template with Google Fonts
├── package.json                   # Dependencies and build scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── vite.config.js                 # Vite configuration with chunking optimization
```

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Build files will be generated in the `dist/` directory with code-splitting applied for Three.js and vendor modules.

### 4. Preview the Production Build
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to preview the production build.

---

## 🌐 Deploying to Netlify or Vercel

### Option A: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project** (from GitHub) or **Deploy manually** (drag and drop the `dist/` folder).
3. If using Git:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.

### Option B: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New Project** and select your GitHub repository.
3. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

---

## 📋 Feature Checklist

| Feature | Status | Notes |
| :--- | :---: | :--- |
| **Splash Screen Preloader** | ✅ | Animated percentage counter 0% to 100%, spinning rings, glowing avatar, letter-by-letter reveal |
| **Three.js 3D Background** | ✅ | Binary rain, wireframe rotating icosahedron, code symbols, lights, scroll camera keyframes |
| **Site Header & Navigation** | ✅ | Sticky header with blur on scroll, mobile-responsive hamburger menu drawer |
| **Hero Section** | ✅ | Status chips ("Open To Work", "Ready To Build"), 3D tilt hero card, social quick links |
| **About Section** | ✅ | Editorial story tailored to Java Full Stack, pulsing availability badge, quick facts table |
| **Academic Education** | ✅ | B.E CSE (KRCT Anna Univ), HSC, SSLC cards with grades and course tags |
| **Technical Skills** | ✅ | Dual infinite animated marquees with emoji pills, plus organized category breakdown |
| **Work Experience** | ✅ | Vertical timeline rail with animated fill for Techvolt Software CRM project |
| **Projects Section** | ✅ | Ghost Key Cloud Security, Internal CRM System, WebInsurer, Boutique Wholesale |
| **Certifications & Services** | ✅ | 4 verified credentials (Udemy Full Stack, Azure, AI Security, 3D Devices) + 4 service offerings |
| **Contact Section** | ✅ | Direct Call/SMS, WhatsApp, Email, LinkedIn, GitHub + Interactive Message Form with Confetti |
| **Downloadable Resume** | ✅ | PDF file (`Kishore_Resume.pdf`) in `public/` + in-modal preview + print-ready document |
| **Custom Red Cursors** | ✅ | Styled arrow cursor and pointer hand matching the reference portfolio |
| **Responsive Design** | ✅ | Pixel-perfect on desktop, tablet, and mobile screens |
