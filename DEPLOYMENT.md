# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
   - Link to your GitHub account
   - Import your repository
   - Vercel will automatically detect Next.js and configure settings
   - Your site will be live in minutes!

**Automatic Deployments**: Connect your GitHub repo to Vercel for automatic deployments on every push.

### Option 2: Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

3. **Deploy**:
```bash
netlify deploy --prod
```

**Build Settings**:
- Build command: `npm run build`
- Publish directory: `.next`

### Option 3: AWS Amplify

1. **Install AWS Amplify CLI**:
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify**:
```bash
amplify init
```

3. **Add hosting**:
```bash
amplify add hosting
```

4. **Publish**:
```bash
amplify publish
```

### Option 4: Docker Deployment

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

2. **Update next.config.js**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
```

3. **Build and run**:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

1. **Install Node.js on your server**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2**:
```bash
npm install -g pm2
```

3. **Clone and build**:
```bash
git clone <your-repo>
cd portfolio
npm install
npm run build
```

4. **Start with PM2**:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

5. **Configure Nginx** (optional):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔐 Environment Variables

If you add environment variables in the future, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

For production, add these variables in your hosting platform's dashboard.

## 🌐 Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## 📊 Analytics Setup

### Google Analytics:

1. **Install package**:
```bash
npm install @next/third-parties
```

2. **Add to layout.tsx**:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🔍 SEO Optimization

Your portfolio is already SEO-optimized with:
- ✅ Semantic HTML
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Responsive design
- ✅ Fast loading times

**Additional improvements**:
1. Add a `sitemap.xml` file
2. Add a `robots.txt` file
3. Submit to Google Search Console
4. Add structured data (JSON-LD)

## 🚨 Common Issues

### Build Errors

**Issue**: Module not found
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue**: Image optimization error
```bash
# Solution: Add image domains to next.config.js
images: {
  domains: ['your-image-domain.com'],
}
```

### Performance

1. **Enable compression**:
```javascript
// next.config.js
module.exports = {
  compress: true,
}
```

2. **Optimize images**: Use Next.js Image component (already implemented)

3. **Enable caching**: Configure in your hosting platform

## 📱 Testing Before Deployment

1. **Build locally**:
```bash
npm run build
npm run start
```

2. **Check for errors**:
```bash
npm run lint
```

3. **Test on multiple devices**:
   - Use Chrome DevTools responsive mode
   - Test on actual mobile devices

## 🔄 Continuous Deployment

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install -g vercel
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## ✅ Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify analytics tracking
- [ ] Check page load speed
- [ ] Test on different browsers
- [ ] Verify SEO tags
- [ ] Set up monitoring
- [ ] Create backups

## 📞 Need Help?

If you encounter any issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Vercel support: https://vercel.com/support
3. Create an issue in your repository

Happy deploying! 🚀

