# 🚀 Modern Portfolio

A stunning, high-performance portfolio website built with Next.js, featuring modern animations, glassmorphism design, and seamless Firebase deployment.

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and custom brand colors
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **3D Interactive Elements**: 
  - 3D Tilt Trading Cards for hobbies
  - Roller coaster wave animations
  - Holographic effects on hover
- **Responsive Layout**: Optimized for all devices
- **Auto-Deploy**: GitHub Actions workflow for continuous deployment to Firebase
- **Optimized Performance**: Static export for blazing-fast load times

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: Firebase Hosting via GitHub Actions
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## 🚀 Deployment

This project uses GitHub Actions for automatic deployment to Firebase Hosting.

### Prerequisites
1. Firebase project with Hosting enabled
2. Firebase Service Account JSON
3. GitHub repository secrets configured

### Setup
1. Add `FIREBASE_SERVICE_ACCOUNT` secret to GitHub repository
2. Update `projectId` in `.github/workflows/firebase-deploy.yml`
3. Push to `main` branch - deployment happens automatically!

See [deployment-guide.md](deployment-guide.md) for detailed instructions.

## 📂 Project Structure

```
app/
├── app/
│   ├── components/     # React components
│   ├── globals.css     # Global styles
│   └── page.tsx        # Main page
├── public/             # Static assets
├── .github/
│   └── workflows/      # GitHub Actions
└── firebase.json       # Firebase config
```

## 🎨 Sections

- **Hero**: Dynamic introduction with typing effect
- **About**: Professional summary
- **Skills**: Tech stack showcase
- **Experience**: Work history
- **Education**: Academic background
- **Volunteer**: Community involvement
- **Certificates**: Tiered certification display
- **Hobbies**: Interactive 3D cards
- **Contact**: Formspree-powered contact form

## 📝 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Live Site**: [Portfolio](https://carbon-modem-300014.web.app)
- **GitHub**: [saranmahadev/portfolio](https://github.com/saranmahadev/portfolio)

---

Built with ❤️ by Saran Mahadev
