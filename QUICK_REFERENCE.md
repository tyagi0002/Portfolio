# 🚀 Quick Reference Guide

## ⚡ Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Create production build
npm run start       # Start production server
npm run lint        # Check for code issues
```

### Troubleshooting
```bash
# Clear cache and reinstall
rm -rf node_modules .next package-lock.json
npm install

# Kill port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Kill port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Run on different port
PORT=3001 npm run dev
```

## 📝 Quick Edit Guide

### Update Personal Info
**File**: `components/Hero.tsx`
- Line ~47: Your name
- Line ~53: Your title
- Line ~60: Your bio

### Add/Edit Projects
**File**: `components/Works.tsx`
- Line ~9: `projects` array
- Add new project object to array

### Update Experience
**File**: `components/Experience.tsx`
- Line ~6: `experiences` array
- Add new experience object to array

### Change Colors
**File**: `tailwind.config.js`
- Line ~14-20: Color definitions

### Edit Contact Info
**File**: `components/Contact.tsx`
- Line ~9: `contactInfo` array

## 🎨 Component Templates

### New Section Template
```typescript
'use client'

import { motion } from 'framer-motion'

export default function YourSection() {
  return (
    <section id="your-section" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Section Title
          </h2>
          <p className="text-gray-400 text-lg">
            Section description
          </p>
        </motion.div>
        
        {/* Your content here */}
      </div>
    </section>
  )
}
```

### Card Template
```typescript
<div className="glass-effect rounded-2xl p-8 card-hover">
  <h3 className="text-2xl font-bold text-white mb-4">
    Card Title
  </h3>
  <p className="text-gray-400 mb-6">
    Card description
  </p>
  <button className="px-6 py-2 bg-accent-primary text-white rounded-lg">
    Action
  </button>
</div>
```

## 🔧 Useful CSS Classes

### Layout
```css
max-w-7xl mx-auto px-6    /* Container */
py-20 px-6                /* Section padding */
grid grid-cols-1 md:grid-cols-2 gap-8  /* Responsive grid */
flex items-center justify-between      /* Flex layout */
```

### Styling
```css
glass-effect              /* Glass morphism effect */
card-hover                /* Hover scale animation */
text-gradient             /* Gradient text color */
bg-accent-primary         /* Primary accent background */
text-white hover:text-accent-primary  /* Text with hover */
```

### Animations
```css
transition-all duration-300           /* Smooth transitions */
animate-bounce                        /* Bounce animation */
animate-float                         /* Float animation */
motion.div with whileHover={{ scale: 1.05 }}  /* Framer Motion */
```

## 🎯 Common Tasks

### Add Social Link
1. Go to `components/Hero.tsx` (line ~74)
2. Add new icon:
```typescript
<a href="your-link">
  <YourIcon />
</a>
```

### Add Navigation Item
1. Go to `components/Navigation.tsx` (line ~17)
2. Add to `navLinks` array:
```typescript
{ name: 'New Link', href: '#new-section' }
```

### Change Font
1. Update `app/globals.css` import URL
2. Update `tailwind.config.js` fontFamily

### Add New Technology
1. Go to `components/TechStack.tsx`
2. Add to relevant category:
```typescript
{ name: 'Tech Name', icon: <Icon />, color: 'text-blue-500' }
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port in use | `lsof -ti:3000 \| xargs kill -9` |
| Build fails | `rm -rf .next && npm run build` |
| Module not found | `rm -rf node_modules && npm install` |
| CSS not updating | Clear browser cache |
| TypeScript errors | Check file imports and types |

## 📦 File Locations

| What | Where |
|------|-------|
| Main page | `app/page.tsx` |
| Global styles | `app/globals.css` |
| Components | `components/*.tsx` |
| Config | `*.config.js` files |
| Types | `*.d.ts` files |

## 🌐 Important URLs

| Service | URL |
|---------|-----|
| Local dev | http://localhost:3000 |
| Next.js docs | https://nextjs.org/docs |
| Tailwind docs | https://tailwindcss.com/docs |
| Framer Motion | https://www.framer.com/motion |
| React Icons | https://react-icons.github.io |

## ⌨️ VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier - Code formatter
- Auto Rename Tag
- Auto Close Tag
- Path Intellisense

## 🎨 Color Picker

Use these accent colors in your design:

```
Primary:   #60A5FA (Blue)
Secondary: #818CF8 (Purple)
Success:   #34D399 (Green)
Warning:   #FBBF24 (Yellow)
Error:     #EF4444 (Red)
Info:      #06B6D4 (Cyan)
```

## 📱 Testing Checklist

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test all links
- [ ] Test navigation
- [ ] Test smooth scrolling
- [ ] Check console for errors
- [ ] Verify responsiveness
- [ ] Test contact form

## 🚀 Deployment Checklist

- [ ] Build succeeds (`npm run build`)
- [ ] No console errors
- [ ] Updated all content
- [ ] Optimized images
- [ ] Updated metadata
- [ ] Tested all sections
- [ ] Ready to deploy!

## 💡 Pro Tips

1. **Use browser DevTools** to inspect elements and test responsiveness
2. **Keep components small** - one component per file
3. **Use TypeScript** types for better code quality
4. **Commit often** to track your changes
5. **Test on real devices** not just emulators
6. **Optimize images** before uploading
7. **Keep dependencies updated** regularly
8. **Write meaningful commit messages**
9. **Use semantic HTML** for better SEO
10. **Follow the existing code style**

## 📚 Learn More

- **React**: https://react.dev
- **Next.js**: https://nextjs.org/learn
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind**: https://tailwindcss.com/docs/utility-first
- **Git**: https://git-scm.com/doc

---

**Need more help?** Check the other documentation files:
- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup instructions
- `DEPLOYMENT.md` - How to deploy
- `PROJECT_OVERVIEW.md` - Technical details

**Happy coding! 🎉**

