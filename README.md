# Vaibhav Tyagi - Portfolio (Artifact Style)

A modern, **Artifact-template inspired** portfolio website showcasing my work as an AI Developer, LLM Engineer, and Cloud Enthusiast.

## 🎨 Design Style

This portfolio follows the **Artifact template** aesthetic:
- ✅ Left-aligned, bold headlines
- ✅ Dark mode (#0a0a0a background)
- ✅ Card-based UI with flat design
- ✅ Status cards for quick actions
- ✅ Large hero images with subscription
- ✅ Horizontal scrolling project cards
- ✅ Minimalist navigation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Dark theme styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Header with avatar
│   ├── Hero.tsx             # Left-aligned hero + status cards
│   ├── UpcomingDrop.tsx     # Featured section + subscription
│   ├── NewWork.tsx          # Project showcase
│   ├── Services.tsx         # Service offerings
│   ├── Products.tsx         # Tools & templates
│   ├── Experience.tsx       # Work timeline
│   ├── Contact.tsx          # Contact form
│   ├── About.tsx            # Bio section
│   └── Footer.tsx           # Footer
└── public/                  # Static assets
```

## ✨ Features

### Design Features
- 🎨 **Artifact-inspired UI** - Left-aligned, minimalist design
- 🌙 **Pure Dark Theme** - Solid #0a0a0a background
- 💳 **Card-Based Layout** - Flat design with subtle hover effects
- 📱 **Fully Responsive** - Perfect on all screen sizes
- ⚡ **Smooth Animations** - Powered by Framer Motion

### Content Sections
1. **Hero** - Bold headline with 3 status cards
2. **Upcoming Drop** - Featured project with subscription
3. **New Work** - Latest 3 projects in card grid
4. **Services** - 6 AI/ML/Cloud service offerings
5. **Products** - Open-source tools & templates
6. **Experience** - Professional timeline
7. **About** - Personal bio and expertise
8. **Contact** - Form and contact information

## 🎯 Key Components

### Status Cards (Hero Section)
Three interactive cards:
- **Available** - Schedule a call
- **Portfolio** - View projects
- **Contact** - Get in touch

### Subscription Section
- Large hero image (AI/Cloud themed)
- Email capture form
- Topic tags
- "Upcoming Drop" badge

### Project Cards
- Image-first design
- Category tags
- Hover animations
- Pagination dots

## 🎨 Color System

```css
Background:      #0a0a0a  (Main background)
Surface:         #141414  (Cards)
Surface Light:   #1a1a1a  (Hover states)
Text Primary:    #ffffff  (Headings)
Text Secondary:  #a0a0a0  (Body)
Accent:          #3b82f6  (Blue)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)

## 📝 Customization

### Update Projects
Edit `components/NewWork.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    category: 'Tech Stack',
    image: 'image-url',
    description: 'Description',
  },
]
```

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --background: #0a0a0a;
  --accent: #3b82f6;
}
```

### Modify Status Cards
Edit `components/Hero.tsx`:
```typescript
const statusCards = [
  { icon, label, action, href },
]
```

## 📚 Documentation

- **REDESIGN_NOTES.md** - Complete redesign explanation
- **SETUP_GUIDE.md** - Detailed customization guide
- **DEPLOYMENT.md** - Deployment instructions
- **QUICK_REFERENCE.md** - Common commands

## 🚀 Deployment

Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

See `DEPLOYMENT.md` for other options (Netlify, AWS, Docker, etc.)

## 📧 Contact

- **Email**: tyagivaibhav2018@gmail.com
- **GitHub**: [tyagi0002](https://github.com/tyagi0002)
- **LinkedIn**: [tyagi09](https://linkedin.com/in/tyagi09)
- **Location**: Ghaziabad, India

## 📄 License

MIT License - Free to use and modify

## 🙏 Acknowledgments

- Design inspired by the Artifact portfolio template
- Icons from [React Icons](https://react-icons.github.io/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/)

---

**Built with ❤️ by Vaibhav Tyagi**
