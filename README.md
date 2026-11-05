# Ahmed Masood — The Data Series

A cinematic, responsive portfolio showcasing my Data Science journey, projects, technical skills, education and internship experience.

🌐 **Live Website:** [ahmedmasood.vercel.app](https://ahmedmasood.vercel.app/)

## Features

- Cinematic opening sequence and animated interface
- Black and crimson theme with colorful card gradients
- Responsive layout for mobile, tablet and desktop
- Viewer profiles with different section orders
- Project gallery with detailed previews
- Skills, education and journey sections
- Internship experience
- 11 certificates, letters and reports with PDF previews
- Résumé viewer and download
- LinkedIn, GitHub and email contact links

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type-safe application code |
| Vite | Development server and production builds |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | Animations and transitions |
| Lenis | Smooth scrolling |

## Featured Projects

- **CareShield AI** — Hospital readmission risk project
- **DeepSight** — Deepfake image detection project
- **MediBook AI** — AI booking assistant
- **Iris Classification** — Machine learning classification project
- **Sales Prediction** — Sales forecasting project

Project artwork is conceptual. Performance results should be interpreted using each project's own evaluation.

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Clone this repository and open its project directory in your terminal.

Install dependencies:

    npm ci

Start the development server:

    npm run dev

Open the local URL displayed in the terminal.

### Production Build

Create an optimized build:

    npm run build

Preview the build locally:

    npm run preview

The production output is generated in the `dist/` directory.

## Project Structure

    ├── public/
    │   ├── assets/
    │   │   ├── certificates/
    │   │   ├── projects/
    │   │   └── Ahmed_Masood_Profile.pdf
    │   └── favicon.svg
    ├── scripts/
    ├── src/
    │   ├── components/
    │   ├── data/
    │   │   ├── certificates.json
    │   │   └── portfolio.ts
    │   ├── hooks/
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── index.html
    ├── package.json
    └── vite.config.ts

## Customization

- **Profile and projects:** `src/data/portfolio.ts`
- **Certificate metadata:** `src/data/certificates.json`
- **Theme and global styles:** `src/index.css`
- **Page sections:** `src/components/`
- **Images and documents:** `public/assets/`
- **Page title and metadata:** `index.html`

## Deployment

The portfolio is hosted on Vercel.

For a source-based Vercel deployment, use:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Select the directory containing `package.json` as the project root.

## Connect With Me

- **Portfolio:** https://ahmedmasood.vercel.app/
- **GitHub:** https://github.com/ahmedmasood005-lab
- **LinkedIn:** https://www.linkedin.com/in/ahmed-masood-37b3a72a7

## Acknowledgment

Portfolio design adapted from Sushmita Dasari's “The Series” template and personalized with Ahmed Masood's profile, projects and documents.
