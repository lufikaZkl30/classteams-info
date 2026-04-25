import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "ClassTeams - About Us",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary-container rounded-full blur-[120px]" />
            <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8">
              Redefining the <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-gradient">
                Digital Atheneum
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-12">
              ClassTeams isn't just another platform; it's a curated environment
              designed to make educational workflows feel academically
              authoritative and technologically effortless.
            </p>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="md:col-span-5 md:col-start-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary-container rounded-full text-on-tertiary-container font-label text-sm font-medium mb-6">
                <span className="material-symbols-outlined text-[18px]">
                  history_edu
                </span>
                Our Story
              </div>
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-6 tracking-tight">
                Built for the Modern Mind.
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
                We saw a landscape cluttered with rigid, boxy software that
                stifled creativity rather than enabling it. Our vision was to
                break the standard SaaS template.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                By rejecting traditional structures in favor of intentional
                asymmetry and tonal depth, we built a system that breathes—where
                data isn't just displayed, it's staged.
              </p>
            </div>

            {/* Right – Glassmorphism Focus Pane */}
            <div className="md:col-span-5 md:col-start-8 relative">
              <div className="bg-surface-container-lowest/70 backdrop-blur-[20px] rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(45,51,55,0.06)] border border-outline-variant/15 relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkgULmXR7NROWswG5yg8iGvcBocsCcxhngYQblDd9wm2vmtkVvi7otvmmF6qn9R_FD89y0t19hunYHVOR66iTToZ4mPxek_DEzMlH3NCAmUtn9Lf4BziWGDqFzutZnoFVJfuvW0Qf46VSwZP8oHPrDRl8pSmdb14KqyuacugglV72l5KHr12LRt8OIQSEtH_PhGt2bP0CtI_N_SoPeRFQrn6HJD3t5g62lwPrx7BwFrAb3qofI5ty1oIS8M0wgKyWcOkhnlO1veBE"
                  alt="Students collaborating in a modern study space"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover mb-6"
                />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-on-surface">
                      Empowering Educators
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">
                      Since 2024
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative back plate */}
              <div className="absolute top-8 -right-8 w-full h-full bg-surface-container rounded-[2rem] -z-10" />
            </div>
          </div>
        </section>

        {/* ── Why ClassTeams Bento Grid ── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
                Why Choose ClassTeams?
              </h2>
              <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
                We don't just organize information; we elevate the experience of
                learning and teaching through thoughtful design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
              {/* Item 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(45,51,55,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(45,51,55,0.08)] transition-all duration-300 border border-outline-variant/10 flex flex-col justify-between group">
                <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    architecture
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    Intentional Asymmetry
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    We utilize wide margins and dramatic shifts in typography
                    scale to create a UI that feels like an editorial
                    layout—premium and evolving.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="md:col-span-1 bg-primary text-on-primary rounded-2xl p-8 shadow-lg flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl" />
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-6 relative z-10">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    layers
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold mb-3">
                    Tonal Depth
                  </h3>
                  <p className="font-body text-on-primary/90 leading-relaxed">
                    Depth is a feeling, achieved by stacking tiers of subtle
                    background shifts rather than harsh drop-shadows.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="md:col-span-1 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(45,51,55,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(45,51,55,0.08)] transition-all duration-300 border border-outline-variant/10 flex flex-col justify-between">
                <div className="w-14 h-14 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    border_clear
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                    The No-Line Rule
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    Boundaries are defined by soft background shifts, avoiding
                    rigid borders to create comfortable "soft zones" for deep
                    work.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(45,51,55,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(45,51,55,0.08)] transition-all duration-300 border border-outline-variant/10 flex items-center gap-8 overflow-hidden relative group">
                <div className="flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-3xl">
                      view_cozy
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    Glass &amp; Gradient
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Floating elements utilize frosted glass textures, allowing
                    the platform's soft blues to bleed through, softening the
                    edges of the digital workspace.
                  </p>
                </div>
                <div className="hidden md:block w-1/3 h-full relative -mr-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-secondary-container/40 rounded-l-2xl backdrop-blur-md border-l border-white/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Vision ── */}
        <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute bottom-0 left-[20%] w-[60%] h-[60%] bg-tertiary-container rounded-full blur-[150px]" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mb-8 text-white">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8 tracking-tight">
              Our Vision for the Future
            </h2>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light mb-12">
              To seamlessly blend academic authority with technological grace. We
              envision a world where the tools we use to learn are as inspiring
              and beautifully crafted as the knowledge they hold.
            </p>
            <button className="bg-surface-container-lowest text-on-surface font-semibold py-4 px-10 rounded-xl shadow-[0_10px_20px_-10px_rgba(45,51,55,0.1)] hover:shadow-[0_15px_30px_-15px_rgba(45,51,55,0.15)] border border-outline-variant/20 transition-all duration-300 active:scale-95 text-lg">
              Join the Atheneum
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
