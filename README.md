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

## 🚢 Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual

```bash
pnpm build
# Upload /out folder
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
