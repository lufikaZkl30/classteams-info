# 🚀 Setup Guide - ClassTeams Next.js

## ⚡ Quick Start

### Step 1: Extract File
```bash
unzip classteams-nextjs.zip
cd classteams
```

### Step 2: Install Dependencies
```bash
npm install
```
**Tunggu sampai selesai!** Ini download Tailwind, Next.js, dan semua dependencies.

### Step 3: Run Development Server
```bash
npm run dev
```

Buka browser ke: `http://localhost:3000`

---

## ✅ Verifikasi Instalasi

Setelah `npm run dev`, pastikan melihat:
```
✓ Ready in 1234ms
✓ Local:        http://localhost:3000
```

Jika tidak muncul, cek error di terminal.

---

## 🎨 Styling Checklist

Saat halaman pertama load, pastikan:

- [ ] Background color light gray/white ✓
- [ ] "ClassTeams" text di header berwarna ungu (primary) ✓
- [ ] Navigation links ada di header ✓
- [ ] "Get Started" button punya warna gradient ungu-pink ✓
- [ ] Hero section ada decorative blobs ✓
- [ ] Font terlihat rapi (Plus Jakarta Sans untuk heading) ✓
- [ ] Material Symbols icons muncul (checkmark, upload, etc) ✓

---

## ❌ Troubleshooting

### ❌ "npm: command not found"
**Solusi:** Install Node.js dari https://nodejs.org/

```bash
node --version  # Check versi
npm --version
```

---

### ❌ "Cannot find module 'tailwindcss'"
**Solusi:** Dependencies belum ter-install
```bash
rm -rf node_modules
npm install
```

---

### ❌ Styling tidak muncul / halaman putih polos
**Langkah:**

1. **Buka DevTools (F12) → Console**, cek ada error?

2. **Clear Cache:**
   - Chrome/Edge: `Ctrl+Shift+Delete` → hapus semua
   - Restart browser

3. **Restart dev server:**
   ```bash
   Ctrl+C  (stop server)
   npm run dev  (jalankan ulang)
   ```

4. **Check globals.css import:**
   - Buka `app/layout.tsx`
   - Pastikan ada baris: `import "./globals.css";`
   - ✓ Harus di TOP (sebelum import lainnya)

---

### ❌ Font tidak load / Text terlihat standar
**Penyebab:** Font dari Google belum ter-cache

**Solusi:**
1. Cek internet connection
2. DevTools → Network tab → search "googleapis"
3. Harus ada status 200 (loaded)
4. Tunggu beberapa saat (font loading async)

---

### ❌ Icons (Material Symbols) tidak muncul
**Solusi:**
1. Cek di `app/layout.tsx` ada link Material Symbols
2. Di DevTools → Network, cari "Material+Symbols"
3. Harus status 200

---

### ❌ Tailwind colors tidak recognize
**Contoh:** `bg-primary` tidak bekerja

**Penyebab:** Tailwind config file salah

**Solusi:**
1. Buka `tailwind.config.ts`
2. Pastikan struktur benar:
```typescript
theme: {
  extend: {
    colors: {
      primary: "#4a4bd7",
      secondary: "#6e3bd8",
      // ... dll
    }
  }
}
```
3. Restart dev server setelah edit config

---

### ❌ Next.js error: "ENOENT: no such file or directory"
**Solusi:**
```bash
# Delete cache
rm -rf .next
npm run dev
```

---

### ❌ "Cannot assign to read only property 'suppressHydrationWarning'"
**Ini OK!** Warning ini tidak affect functionality. Bisa di-ignore.

---

## 📊 File Structure Check

Pastikan struktur folder seperti ini:

```
classteams/
├── app/
│   ├── layout.tsx ✓
│   ├── globals.css ✓
│   ├── page.tsx ✓
│   ├── about/page.tsx ✓
│   ├── service/page.tsx ✓
│   ├── contact/page.tsx ✓
│   └── experiment/page.tsx ✓
├── components/
│   ├── Navbar.tsx ✓
│   └── Footer.tsx ✓
├── node_modules/ ← auto-created by npm install
├── .next/ ← auto-created by npm run dev
├── package.json ✓
├── tailwind.config.ts ✓
├── next.config.ts ✓
└── tsconfig.json ✓
```

---

## 🔍 Debug Mode

Untuk debugging styling issues:

### 1. Check CSS loading
**DevTools → Elements → Styles panel**
- Klik element, lihat di Styles mana CSS datang
- Harus ada "globals.css" atau inline styles

### 2. Check Tailwind generation
**DevTools → Elements**, click pada element dengan class Tailwind
- Contoh: `class="bg-primary px-8 py-4"`
- Di Styles, harus ada rule CSS-nya

### 3. Check fonts
**DevTools → Network → Filter: font**
- Cari "googleapis", "fonts.gstatic"
- Status harus 200 (berhasil)

### 4. Check console warnings
**DevTools → Console**
- Bersihkan warnings yang tidak penting
- Fokus pada errors (merah)

---

## 💡 Tips

1. **Jangan edit `.next` folder** - auto-generated
2. **Restart dev server** setelah edit:
   - `tailwind.config.ts`
   - `next.config.ts`
   - `app/layout.tsx`

3. **Gunakan `next/image`** untuk images (sudah dipakai di project)

4. **Tailwind classes** HARUS ada di JSX, contoh:
   ```jsx
   <div className="bg-primary px-8 py-4">OK ✓</div>
   
   // JANGAN:
   const classStr = "bg-primary"; // Tidak di-scan
   <div className={classStr}>TIDAK ✗</div>
   ```

---

## 🚢 Production Build

Sebelum deploy ke production:

```bash
# 1. Build
npm run build

# Output:
# ✓ Compiled successfully
# ✓ Linting and checking validity of types
```

Jika build error, ada yang perlu di-fix di code.

```bash
# 2. Test production build locally
npm start

# Buka http://localhost:3000
```

---

## 📱 Device Testing

Setelah styles bekerja, test di berbagai device:

- [ ] Desktop (1920px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

**DevTools → Device mode (Ctrl+Shift+M)**

---

## ✨ Selanjutnya

Setelah semua berjalan:

1. **Customize colors** di `tailwind.config.ts`
2. **Edit images** - replace Google image URLs
3. **Add functionality** - form submission, etc
4. **Deploy** ke Vercel (gratis untuk Next.js)

---

**Butuh bantuan? Cek error message di terminal! 🎯**
