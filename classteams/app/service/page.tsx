import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ClassTeams - Service",
};

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="max-w-7xl mx-auto px-8 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-start md:items-center text-left md:text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label text-xs font-semibold mb-8 tracking-wider uppercase">
            <span className="material-symbols-outlined fill text-[16px]">
              auto_awesome
            </span>
            The Digital Atheneum
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Orchestrate your{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              classroom ecosystem.
            </span>
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            A highly curated suite of tools designed to elevate instruction,
            streamline complex workflows, and stage meaningful collaboration
            without the visual noise.
          </p>
        </section>

        {/* ── Features Bento Grid ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          <div className="bg-surface-container-low rounded-[2.5rem] p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Feature 1: Task Management */}
              <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(45,51,55,0.08)] transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 max-w-md">
                  <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl">
                      task_alt
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface mb-4 tracking-tight">
                    Intelligent Task Management
                  </h3>
                  <p className="font-body text-on-surface-variant text-base leading-relaxed">
                    Distribute, track, and curate assignments with absolute
                    precision. Our automated workflows and intelligent surfacing
                    reduce administrative overhead, allowing you to focus on
                    instruction.
                  </p>
                </div>
                {/* Abstract UI */}
                <div className="absolute -right-12 -bottom-12 w-2/3 h-2/3 bg-surface border border-outline-variant/15 rounded-tl-3xl shadow-2xl p-6 flex flex-col gap-4 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 ease-out">
                  <div className="h-4 w-1/3 bg-surface-container-highest rounded-full" />
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10">
                      <div className="w-4 h-4 rounded-full border-2 border-primary" />
                      <div className="h-3 w-1/2 bg-surface-container-high rounded-full" />
                    </div>
                    <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10">
                      <div className="w-4 h-4 rounded-full border-2 border-outline-variant" />
                      <div className="h-3 w-2/3 bg-surface-container-highest rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: File Upload */}
              <div className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(45,51,55,0.06)] transition-all duration-500 flex flex-col min-h-[400px]">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-3xl">
                    cloud_upload
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 tracking-tight">
                  Seamless Submissions
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                  Centralized file collection that feels effortless. Features
                  automated sorting, strict version control, and instant preview
                  capabilities without breaking flow.
                </p>
                <div className="w-full h-32 rounded-xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center bg-surface-container-low/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors duration-300">
                    upload_file
                  </span>
                </div>
              </div>

              {/* Feature 3: Quizzes */}
              <div className="md:col-span-5 bg-surface-container-lowest rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(45,51,55,0.06)] transition-all duration-500 flex flex-col min-h-[350px]">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    quiz
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 tracking-tight">
                  Dynamic Assessments
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                  Construct interactive quizzes with nuanced formatting.
                  Real-time grading and deep analytics provide immediate insights
                  into classroom comprehension.
                </p>
                <div className="mt-auto space-y-3">
                  <div className="h-10 w-full bg-surface-container-low rounded-lg flex items-center px-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-secondary/20 w-[75%] rounded-lg" />
                    <span className="relative z-10 text-xs font-semibold text-on-surface">
                      Class Average: 75%
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 4: Collaboration */}
              <div className="md:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(45,51,55,0.08)] transition-all duration-500 flex flex-col justify-center min-h-[350px]">
                <div className="flex items-start gap-8 relative z-10">
                  <div className="flex-grow">
                    <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">
                        diversity_3
                      </span>
                    </div>
                    <h3 className="font-headline text-3xl font-bold text-on-surface mb-4 tracking-tight">
                      Fluid Collaboration
                    </h3>
                    <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-md">
                      Dismantle structural walls with real-time shared
                      workspaces. Threaded, context-aware discussions and
                      synchronous editing turn isolation into intellectual
                      synergy.
                    </p>
                  </div>
                  {/* Avatar stack */}
                  <div className="hidden lg:flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed font-bold text-sm z-30">
                      A
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed font-bold text-sm z-20">
                      B
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed font-bold text-sm z-10">
                      C
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 mb-24">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(74,75,215,0.3)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
            <h2 className="relative z-10 font-headline text-4xl md:text-5xl font-bold text-on-primary mb-6 tracking-tight">
              Ready to elevate your space?
            </h2>
            <p className="relative z-10 font-body text-on-primary/80 text-lg mb-10 max-w-xl mx-auto">
              Join the digital atheneum and transform how your class interacts,
              submits, and succeeds.
            </p>
            <button className="relative z-10 bg-surface-container-lowest text-primary hover:bg-surface transition-colors px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 ease-out">
              Initialize Workspace
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
