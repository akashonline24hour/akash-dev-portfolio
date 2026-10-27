# 🚀 Akash Chandra Paul — Full-Stack Developer Portfolio

A high-performance, modern, dark-themed developer portfolio built with **Next.js (App Router)** and **Tailwind CSS**. Designed with a sleek glassmorphic aesthetic, custom branding, and fully responsive layouts to showcase full-stack development expertise.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://next.js5.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Database / Backend Tools:** Node.js, Express.js, MongoDB

---

## ✨ Key Features

- **Modern Dark Theme UI:** Crafted with custom glassmorphism, smooth hover transitions, and glowing ambient accents.
- **Custom Brand Identity:** Integrated custom `<A/>` vector logo and favicon.
- **Interactive Sections:**
  - **Hero:** Dynamic introduction with designation badge and direct resume download.
  - **Projects:** Showcase of production-ready applications with live links and code repositories.
  - **Skills & Education:** Organized layout highlighting full-stack proficiencies and B.Sc. CSE background (Uttara University).
  - **Contact & Socials:** Instant connection links to GitHub, LinkedIn, Twitter/X, and Facebook.
- **Robust Error Handling:** Custom glassmorphic `404 Not Found` page and global error boundary.
- **SEO Optimized:** Built-in dynamic sitemap generation, `robots.txt`, and rich OpenGraph social sharing meta tags.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (avatar, resume, favicon)
│   ├── avatar.png
│   └── resume.pdf
├── src/
│   ├── app/                # Next.js App Router pages & layout
│   │   ├── favicon.ico
│   │   ├── icon.svg        # Branded SVG favicon
│   │   ├── layout.jsx      # Global layout & metadata
│   │   ├── page.jsx        # Homepage component
│   │   ├── not-found.jsx   # Custom 404 page
│   │   ├── sitemap.js      # Dynamic SEO sitemap
│   │   └── robots.js       # Search engine crawler rules
│   ├── components/         # Reusable UI components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   └── data/               # Static portfolio data source
│       └── portfolioData.js
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies & scripts
```
