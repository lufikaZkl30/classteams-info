# ClassTeams - Next.js Project

Konversi lengkap dari HTML statis menjadi Next.js + TypeScript + Tailwind CSS.

## 📋 Prerequisites

- Node.js 20+ 
- npm atau yarn

## 🚀 Setup & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Buka browser ke `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
classteams/
├── app/
│   ├── layout.tsx           ← Root layout + fonts
│   ├── globals.css          ← Global styles + custom CSS
│   ├── page.tsx             ← Home (/)
│   ├── about/
│   │   └── page.tsx         ← About page (/about)
│   ├── service/
│   │   └── page.tsx         ← Features (/service)
│   ├── contact/
│   │   └── page.tsx         ← Contact (/contact)
│   └── experiment/
│       └── page.tsx         ← Sandbox (/experiment)
├── components/
│   ├── Navbar.tsx           ← Navbar dengan active states
│   └── Footer.tsx           ← Footer
├── public/                  ← Static files (images, etc)
├── tailwind.config.ts       ← Design tokens & colors
├── next.config.ts           ← Next.js configuration
├── tsconfig.json            ← TypeScript config
├── postcss.config.mjs       ← PostCSS config
└── package.json
```

## 🎨 Styling

### Custom Design Tokens
Semua warna custom sudah di-setup di `tailwind.config.ts`:
- Primary: `#4a4bd7`
- Secondary: `#6e3bd8`
- Tertiary: `#006592`
- Plus 50+ custom colors

### Font
Menggunakan Google Fonts yang di-optimize:
- **Plus Jakarta Sans** (headline)
- **Inter** (body)
- **Material Symbols** (icons)

## ⚡ Fitur

✅ Fully TypeScript  
✅ Server Components & Client Components  
✅ Optimized Images (next/image)  
✅ Responsive Design  
✅ Custom CSS Classes (glass-panel, ambient-shadow, etc)  
✅ Active Navbar Links  
✅ Tailwind Color System  

## 📝 Catatan Penting

1. **Images dari Google**: Project menggunakan placeholder images dari Google. Jika ingin change, edit URLs di halaman masing-masing.

2. **Material Icons**: Sudah ter-load otomatis via Google Fonts di `app/layout.tsx`

3. **CSS Custom Classes**: Ada di `app/globals.css`:
   - `.hero-gradient-text` - Gradient text effect
   - `.cta-gradient-bg` - Gradient button background
   - `.glass-panel` - Glassmorphism effect
   - `.ambient-shadow` - Custom shadow

## 🔧 Troubleshooting

### Styles tidak muncul?
1. Pastikan sudah jalankan `npm install`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart dev server

### Font tidak load?
1. Buka DevTools → Console, cek ada error
2. Pastikan internet connection aktif (fonts dari Google CDN)

### Tailwind classes tidak recognized?
1. Cek `tailwind.config.ts` sudah benar
2. Cek path di `content: []` mencakup semua file

## 📦 Dependencies

```json
{
  "next": "15.3.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.1"
}
```

## 🎯 Pages Available

| Path | Description |
|------|-------------|
| `/` | Home - Hero + Features |
| `/about` | About - Story + Vision |
| `/service` | Features - Bento Grid |
| `/contact` | Contact Form + Info |
| `/experiment` | UI Sandbox |

---

**Happy coding!** 🚀
