# Choreography II — Course Guidebook

**T D 332N · Spring 2025**  
University of Texas at Austin  
Department of Theatre and Dance

---

## 🔐 Authentication

This site is protected with [Clerk](https://clerk.com) authentication. Only enrolled students can access the content.

### Setup Clerk

1. Create a free account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your **Publishable Key** from the Clerk dashboard

### Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files from this source package
3. Go to **Settings → Secrets and variables → Actions**
4. Click **New repository secret**
5. Name: `VITE_CLERK_PUBLISHABLE_KEY`
6. Value: Your Clerk publishable key (starts with `pk_`)
7. Go to **Settings → Pages**
8. Source: **GitHub Actions**
9. Push to `main` branch — the site will auto-deploy!

### Local Development

```bash
# Install dependencies
pnpm install

# Create .env file with your Clerk key
echo "VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY" > .env

# Run dev server
pnpm run dev
```

---

## 📱 Install as App (PWA)

**On iPhone/iPad:**
1. Open in Safari
2. Tap Share button
3. Tap "Add to Home Screen"

**On Android:**
1. Open in Chrome
2. Tap menu (3 dots)
3. Tap "Add to Home Screen"

---

## ✨ Features

- 🔐 **Clerk authentication** — enrolled students only
- 🎨 **Bold, colorful design** with smooth animations
- 🗺️ **Course map** showing your journey
- 🎬 **15 choreographer videos** in the Study Lab
- 📱 **Works offline** as a PWA
- 📲 **Mobile-friendly** responsive design

---

## 🎨 Design

- **Typography:** Syne (display), DM Sans (body), Space Mono (mono)
- **Colors:** Coral, Mint, Blue, Yellow, Violet, Orange
- **Style:** Grid background, bold borders, playful hover effects

---

**Instructor:** Sinclair Emoghene
