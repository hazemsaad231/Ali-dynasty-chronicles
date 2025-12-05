# Ali Dynasty Chronicles

A comprehensive web application dedicated to exploring the rich history and lineage of **Muhammad Ali Pasha** and his dynasty that ruled Egypt from 1805 to 1952. This interactive platform presents the fascinating story of the founder of modern Egypt and his descendants through an elegant, bilingual (Arabic/English) interface.

##  Live Website

🔗 [Visit Ali Dynasty Chronicles](https://ali-dynasty-chronicles.netlify.app/)

---

##  Historical Content

The application covers key figures from the Ali Dynasty:

- **Muhammad Ali Pasha** (1769-1849) - Founder of modern Egypt
- **Ibrahim Pasha** (1789-1848) - Military leader and heir
- **Abbas Helmi I** (1812-1854) - Third ruler of the dynasty
- **Ismail Pasha** (1830-1895) - The "Great Khedive"
- **Tewfik Pasha** (1852-1892) - Ruler during British occupation
- **Abbas Helmi II** (1874-1944) - Last effective Khedive
- **Hussein Kamel** (1853-1917) - First Sultan of Egypt
- **Fuad I** (1868-1936) - First King of modern Egypt

Each biography includes detailed historical information, achievements, and contextual background in both Arabic and English.

---

##  Features

###  **Historical Features**
- **Detailed Biographies**: Comprehensive life stories of key dynasty members including Muhammad Ali Pasha, Ibrahim Pasha, Ismail Pasha, and others
- **Interactive Family Tree**: Visual representation of the dynasty's lineage and relationships
- **Historical Timeline**: Chronological exploration of major events and achievements
- **Photo Gallery**: Rich collection of historical images, palaces, monuments, and artifacts

###  **Technical Features**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: Arabic and English content with proper RTL text support
- **Modern UI/UX**: Clean, elegant interface with royal Egyptian theming
- **Fast Performance**: Built with modern web technologies for optimal speed
- **SEO Optimized**: Structured for search engine visibility

---

##  Screenshots

### Landing Page
![Landing Page](src/assets/images/LandingPage_Family%20Ali.png)

### Family Tree
![Family Tree](src/assets/images/TreePage_Family%20Ali.png)

### Historical Timeline
![Timeline](src/assets/images/LinePage_Family%20Ali.png)

### Gallery
![Gallery](src/assets/images/GalleryPage_Family%20Ali.png)

### Mobile Responsive
![Mobile View](src/assets/images/mobileVeiw.png)

---

##  Technologies Used

### **Frontend Framework**
-  **React 18** - Modern UI library with hooks and functional components
-  **TypeScript** - Type-safe development with enhanced IDE support
-  **Tailwind CSS** - Utility-first CSS framework for rapid styling

### **Build Tools & Development**
-  **Vite** - Lightning-fast build tool and development server
-  **React Query (@tanstack/react-query)** - Powerful data fetching and state management
-  **React Router DOM** - Client-side routing and navigation

### **UI Components & Icons**
-  **Lucide React** - Beautiful, customizable icons
-  **React Icons** - Comprehensive icon library
- **React Resizable Panels** - Flexible layout components

### **Styling & Animation**
-  **Tailwind Merge** - Utility for merging Tailwind classes
-  **Tailwindcss Animate** - Animation utilities
-  **Tailwindcss Typography** - Beautiful typography defaults

---

##  Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mahmoud25osama/ali-dynasty-chronicles.git
cd ali-dynasty-chronicles
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

##  Project Structure

```
ali-dynasty-chronicles/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Achievements/    # Achievement displays
│   │   ├── family/         # Family tree components
│   │   ├── gallery/        # Photo gallery components
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── timeline/       # Timeline visualization
│   │   └── ui/             # Reusable UI primitives
│   ├── pages/              # Main application pages
│   │   ├── Biography.tsx   # Individual biography pages
│   │   ├── Family.tsx      # Family tree page
│   │   ├── Gallery.tsx     # Photo gallery page
│   │   ├── Timeline.tsx    # Historical timeline page
│   │   └── LandingPage.tsx # Homepage
│   ├── assets/             # Static assets
│   │   └── images/         # Historical photos and images
│   ├── data/              # Static data and content
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Public static files
├── dist/                  # Production build output
└── configuration files    # Vite, TypeScript, Tailwind configs
```

---

##  Deployment

The project is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own Version

1. **Fork this repository**
2. **Connect to Vercel**
   - Import your forked repository to Vercel
   - Configure build settings (auto-detected)
3. **Deploy**
   - Automatic deployments on every push to main

---

##  Contributing

Contributions are welcome! Whether you want to:
- Add more historical content
- Improve translations
- Enhance UI/UX
- Fix bugs or add features

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your descriptive commit message"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Guidelines
- Ensure historical accuracy in content additions
- Follow the existing code style and structure
- Test thoroughly before submitting
- Provide clear commit messages and PR descriptions

---

##  License

This project is open source and available under the [MIT License](LICENSE).

---

##  Author

**Mahmoud Osama**
🔗 [GitHub Profile](https://github.com/mahmoud25osama)
