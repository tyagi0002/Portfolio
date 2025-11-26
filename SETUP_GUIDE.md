# Complete Setup Guide

Welcome! This guide will help you set up and customize your portfolio website.

## 📋 Prerequisites

Before you begin, make sure you have:
- **Node.js** (version 18 or higher): [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Git installed on your system

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- TypeScript

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see your portfolio!

### Step 3: Start Customizing

The website is now running locally. Any changes you make will automatically reload in the browser.

## 🎨 Customization Guide

### 1. Personal Information

**Edit: `components/Hero.tsx`**

Update your name, title, and description:

```typescript
<h1>Your Name</h1>
<h2>Your Title | Your Role | Your Passion</h2>
<p>Your bio goes here...</p>
```

**Update contact links:**
- Email: Replace `tyagivaibhav2018@gmail.com`
- GitHub: Replace `tyagi0002`
- LinkedIn: Update the URL

### 2. Projects/Works

**Edit: `components/Works.tsx`**

Modify the `projects` array:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    icon: <YourIcon />,
    github: 'your-github-link',
    demo: 'your-demo-link',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  // Add more projects...
]
```

### 3. Services

**Edit: `components/Services.tsx`**

Update the `services` array with your offerings:

```typescript
const services = [
  {
    icon: <YourIcon />,
    title: 'Service Name',
    description: 'Service description...',
    highlights: ['Point 1', 'Point 2', 'Point 3'],
  },
  // Add more services...
]
```

### 4. Experience

**Edit: `components/Experience.tsx`**

Update the `experiences` array with your work history:

```typescript
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'Start - End',
    location: 'Location',
    description: 'Job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // Add more experiences...
]
```

### 5. Tech Stack

**Edit: `components/TechStack.tsx`**

Update the `techCategories` array:

```typescript
const techCategories = [
  {
    title: 'Category Name',
    technologies: [
      { name: 'Tech Name', icon: <Icon />, color: 'text-color' },
      // Add more technologies...
    ],
  },
]
```

### 6. Contact Information

**Edit: `components/Contact.tsx`**

Update the `contactInfo` array:

```typescript
const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  // Update other contact info...
]
```

### 7. Colors and Theme

**Edit: `tailwind.config.js`**

Customize your color scheme:

```javascript
colors: {
  dark: {
    100: '#1a1a1a',  // Lighter dark
    200: '#0f0f0f',  // Medium dark
    300: '#050505',  // Darkest
  },
  accent: {
    primary: '#60A5FA',    // Your primary color
    secondary: '#818CF8',  // Your secondary color
  },
}
```

### 8. Fonts

**Edit: `app/globals.css`**

Change the imported fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

Then update in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

### 9. SEO & Metadata

**Edit: `app/layout.tsx`**

Update metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your portfolio description...',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
}
```

### 10. Navigation Links

**Edit: `components/Navigation.tsx`**

Modify the `navLinks` array:

```typescript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add or remove links...
]
```

## 🖼️ Adding Images

### Method 1: Use External URLs

Simply use image URLs in your components:

```typescript
<img src="https://your-image-url.com/image.jpg" alt="Description" />
```

### Method 2: Use Local Images

1. Create a `public/images` folder
2. Add your images there
3. Reference them:

```typescript
<img src="/images/your-image.jpg" alt="Description" />
```

### Method 3: Next.js Image Component (Recommended)

```typescript
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
```

## 📱 Adding New Sections

To add a new section:

1. **Create component**: `components/NewSection.tsx`

```typescript
'use client'

import { motion } from 'framer-motion'

export default function NewSection() {
  return (
    <section id="new-section" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient">
          New Section
        </h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. **Import in page**: `app/page.tsx`

```typescript
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      {/* ... other sections ... */}
      <NewSection />
    </>
  )
}
```

3. **Add to navigation**: `components/Navigation.tsx`

```typescript
{ name: 'New Section', href: '#new-section' }
```

## 🎯 Best Practices

### 1. Optimize Images
- Compress images before uploading
- Use WebP format when possible
- Use Next.js Image component for automatic optimization

### 2. Keep Content Fresh
- Update projects regularly
- Add new achievements
- Keep tech stack current

### 3. Test Responsiveness
- Test on different screen sizes
- Use Chrome DevTools
- Check on actual mobile devices

### 4. Performance
- Keep bundle size small
- Lazy load heavy components
- Optimize animations

### 5. Accessibility
- Use semantic HTML
- Add alt text to images
- Ensure good color contrast
- Test with screen readers

## 🐛 Common Issues & Solutions

### Issue 1: Port Already in Use

```bash
# Solution 1: Use different port
PORT=3001 npm run dev

# Solution 2: Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue 2: Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: Build Errors

```bash
# Check for TypeScript errors
npm run build

# Fix linting issues
npm run lint
```

### Issue 4: Slow Performance

1. Check bundle size: `npm run build`
2. Remove unused dependencies
3. Optimize images
4. Use dynamic imports for heavy components

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

## 🔄 Updating Dependencies

Check for updates:

```bash
npm outdated
```

Update all dependencies:

```bash
npm update
```

Update specific package:

```bash
npm install package-name@latest
```

## 📞 Getting Help

If you're stuck:
1. Check the error message carefully
2. Search the issue on Google/Stack Overflow
3. Check Next.js documentation
4. Review this guide again
5. Check GitHub issues for similar problems

## ✅ Pre-Launch Checklist

Before deploying your portfolio:

- [ ] Updated all personal information
- [ ] Added all projects
- [ ] Updated experience section
- [ ] Checked all links work
- [ ] Tested on mobile devices
- [ ] Optimized all images
- [ ] Updated SEO metadata
- [ ] Tested contact form
- [ ] Checked console for errors
- [ ] Tested in different browsers
- [ ] Ran `npm run build` successfully
- [ ] Reviewed all content for typos

## 🎉 You're Ready!

Your portfolio is now customized and ready to deploy. Check out `DEPLOYMENT.md` for deployment instructions.

Good luck! 🚀

