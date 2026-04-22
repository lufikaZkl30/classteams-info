# ✅ Installation Checklist

Gunakan checklist ini untuk memastikan semua ter-setup dengan benar.

## Step 1: Extract & Install
- [ ] Extract file `classteams-nextjs.zip`
- [ ] Buka terminal/cmd di folder `classteams`
- [ ] Jalankan `npm install`
- [ ] Tunggu sampai selesai (lihat "added XXX packages")

## Step 2: Start Development Server
- [ ] Jalankan `npm run dev`
- [ ] Lihat message: "✓ Ready in XXXms"
- [ ] Lihat: "✓ Local: http://localhost:3000"

## Step 3: Open Browser
- [ ] Buka `http://localhost:3000`
- [ ] Halaman Home muncul

## Step 4: Visual Verification
Pastikan halaman Home menampilkan:

### Header/Navigation ✓
- [ ] "ClassTeams" logo berwarna ungu
- [ ] Navigation links: Home, About, Service, Contact, Experiment
- [ ] "Get Started" button dengan gradient warna

### Hero Section ✓
- [ ] Title: "The Future of Academic Collaboration"
- [ ] Subtitle text di bawah heading
- [ ] 2 buttons: "Get Started" & "Book a Demo"
- [ ] Decorative blobs (light purple/pink shapes di background)
- [ ] Dashboard preview image di kanan

### Features Section ✓
- [ ] "Everything you need, beautifully staged" heading
- [ ] 4 feature cards dalam bento grid layout
- [ ] Icons di dalam feature cards
- [ ] Text content untuk setiap feature

### Footer ✓
- [ ] "ClassTeams" branding
- [ ] Links: Privacy, Terms, Help, Careers
- [ ] Copyright text

### Colors & Styling ✓
- [ ] Background color: light gray (#f7f9fb)
- [ ] Primary buttons: ungu gradient (#4a4bd7 → #6e3bd8)
- [ ] Text color: dark (#2d3337)
- [ ] Proper font: Plus Jakarta Sans untuk heading, Inter untuk body

### Icons ✓
- [ ] Material Symbols icons visible (checkmark, cloud, forum, dll)
- [ ] Icons berwarna sesuai context

## Step 5: Navigation Test
- [ ] Click "About" → halaman /about muncul
- [ ] Click "Service" → halaman /service muncul
- [ ] Click "Contact" → halaman /contact muncul
- [ ] Click "Experiment" → halaman /experiment muncul
- [ ] Click "ClassTeams" logo → kembali ke home
- [ ] Navbar link yang aktif ter-highlight (border-bottom)

## Step 6: Responsive Test
- [ ] DevTools: Ctrl+Shift+M (device toggle)
- [ ] Mobile (375px): layout responsive
- [ ] Tablet (768px): sesuai harapan
- [ ] Desktop (1920px): full width optimal

## 🎯 Jika Semua ✓
Instalasi BERHASIL! 🎉

Sekarang bisa:
- Edit content di halaman masing-masing
- Customize colors di `tailwind.config.ts`
- Add more pages di folder `app/`
- Deploy ke Vercel

## ❌ Jika Ada Yang ✗

Cek di SETUP_GUIDE.md bagian "Troubleshooting"

Common issues:
1. **npm: command not found** → Install Node.js
2. **Module not found** → `npm install` belum selesai atau ada error
3. **Styling tidak muncul** → Clear browser cache, restart dev server
4. **Font tidak load** → Check internet, tunggu loading
5. **Icons tidak muncul** → Check Network tab di DevTools

---

**Jangan lupa:** Setiap edit file config harus restart dev server! 🔄
