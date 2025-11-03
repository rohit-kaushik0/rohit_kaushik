# Rohit Kaushik — Portfolio

A clean, professional, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design

- **Aesthetic**: Professional, smooth, minimalist
- **Background**: Solid black
- **Typography**: Inter font family
- **Color Scheme**: White, gray, black
- **Layout**: Clean with generous whitespace

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Visit **http://localhost:3000**

## 📁 Structure

```
app/
├── components/      # All page components
│   ├── Navbar.tsx   # Minimal navigation
│   ├── Home.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Skills.tsx   # Skills tags
│   ├── Projects.tsx # Project grid
│   ├── Experience.tsx # Work history
│   ├── Contact.tsx  # Contact form
│   └── ScrollToTop.tsx # Scroll button
├── types/           # TypeScript types
├── layout.tsx       # Root layout
├── page.tsx         # Main page
└── globals.css      # Global styles
```

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4
- Framer Motion 12.5

## 🚢 Deploy to Vercel

### Prerequisites

Before deploying, make sure you have:
- A GitHub account
- A Vercel account (free tier available)
- Your repository pushed to GitHub

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   
   In Vercel Project Settings → Environment Variables, add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   RECIPIENT_EMAIL=rohit.kaushik@zylentrix.net
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2 minutes)
   - Your site is live! 🎉

### Update Deployment URLs

After deploying, update these files with your actual Vercel URL:

1. `app/layout.tsx` - Update `metadataBase` URL
2. `app/robots.ts` - Update sitemap URL
3. `app/sitemap.ts` - Update base URL

### Automatic Deployments

Every push to `main` branch will automatically trigger a new deployment on Vercel.

### Performance Optimizations Included

✅ Automatic image optimization (AVIF/WebP)
✅ Console logs removed in production
✅ Code splitting and tree shaking
✅ Compressed assets
✅ Optimized fonts loading
✅ SEO meta tags configured
✅ Robots.txt and Sitemap.xml

### Build Locally (Optional)

```bash
pnpm build
pnpm start
```

## 🎯 Features

- ✅ Clean, minimal design
- ✅ Responsive layout
- ✅ Smooth animations
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast performance

## 📝 Customization

Edit these files:
- `app/components/Home.tsx` - Name, bio, availability
- `app/components/About.tsx` - About section
- `app/components/Experience.tsx` - Work history
- `app/components/Skills.tsx` - Technical skills
- `app/components/Projects.tsx` - Your projects
- `app/components/Contact.tsx` - Contact details

## 📄 License

MIT License

---

**Built with Next.js and Tailwind CSS**
