import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "ClassTeams - Home",
};
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary-fixed-dim/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary-fixed-dim/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />

          <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
            {/* Left copy */}
            <div className="lg:w-1/2 space-y-8 z-10">
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                The Future of <br />
                <span className="hero-gradient-text">Academic Collaboration</span>
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Elevate your educational workspace. ClassTeams merges
                authoritative task management with fluid communication in a
                curated, high-end environment.
              </p>
              <div className="flex items-center gap-4">
                <button className="cta-gradient-bg text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all duration-300 ambient-shadow">
                  Get Started
                </button>
                <button className="px-8 py-4 rounded-xl font-headline font-semibold text-primary bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right – Dashboard Preview */}
            <div className="lg:w-1/2 relative z-10 w-full">
              <div className="relative rounded-2xl bg-surface-container-low p-2">
                <Image
                  src="/images/classteams-app.png"
                  alt="Dashboard Preview"
                  width={800}
                  height={500}
                  className="rounded-xl w-full h-auto shadow-2xl object-cover"
                />

                {/* Floating: Task Completed */}
                <div className="absolute -left-12 top-1/4 glass-panel p-4 rounded-xl ambient-shadow border border-outline-variant/15 items-center gap-4 hidden md:flex">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined">task_alt</span>
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-sm text-on-surface">
                      Task Completed
                    </p>
                    <p className="font-body text-xs text-on-surface-variant">
                      Syllabus Review
                    </p>
                  </div>
                </div>

                {/* Floating: Team Active */}
                <div className="absolute -right-8 bottom-1/4 glass-panel p-4 rounded-xl ambient-shadow border border-outline-variant/15 items-center gap-4 hidden md:flex">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-sm text-on-surface">
                      Team Active
                    </p>
                    <p className="font-body text-xs text-on-surface-variant">
                      4 Members Online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Bento Grid ── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">
                Everything you need, <br />
                beautifully staged.
              </h2>
              <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
                Not just data display, but a curated environment for deep work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1: Task Management */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between ambient-shadow relative overflow-hidden group">
                <div className="z-10 w-full md:w-2/3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-2xl">
                      checklist
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    Intelligent Task Management
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Organize coursework, assign deliverables, and track progress
                    without the visual noise of traditional tools.
                  </p>
                  <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium bg-tertiary-container text-on-tertiary-container rounded-full">
                    Streamlined Workflows
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tl from-primary-fixed-dim to-transparent rounded-tl-full" />
              </div>

              {/* Feature 2: File Uploads */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col ambient-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    cloud_upload
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                  Frictionless File Uploads
                </h3>
                <p className="font-body text-on-surface-variant text-sm">
                  Drag, drop, and curate academic materials in a secure, central
                  repository.
                </p>
              </div>

              {/* Feature 3: Team Collaboration */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col ambient-shadow">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    forum
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                  Fluid Team Collaboration
                </h3>
                <p className="font-body text-on-surface-variant text-sm">
                  Real-time discussions integrated directly into the workspace.
                </p>
              </div>

              {/* Feature 4: Focus Pane */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between ambient-shadow relative overflow-hidden">
                <div className="z-10 w-full md:w-2/3">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container mb-6">
                    <span className="material-symbols-outlined text-2xl">
                      center_focus_strong
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                    The Focus Pane
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6">
                    Immerse yourself in complex grading or planning with our
                    signature distraction-free environment.
                  </p>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-surface-variant rounded-2xl border border-outline-variant/15 rotate-12 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 glass-panel rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA Section ── */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 cta-gradient-bg opacity-5 -z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary-fixed-dim/20 rounded-full blur-[100px] -z-10" />
          <div className="max-w-4xl mx-auto px-8 text-center space-y-8">
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Ready to curate your classroom?
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Join the institutions reimagining the digital academic experience.
            </p>
            <div className="pt-4">
              <button className="cta-gradient-bg text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all duration-300 ambient-shadow inline-flex items-center gap-2">
                Get Started Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
