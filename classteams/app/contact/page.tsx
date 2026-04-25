import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ClassTeams - Contact",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow w-full max-w-6xl mx-auto px-6 md:px-12 py-20 lg:py-32 flex flex-col gap-16">
        {/* ── Hero ── */}
        <section className="max-w-3xl">
          <h1
            className="font-headline text-5xl md:text-6xl text-on-surface tracking-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Connect with the Atheneum.
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you're exploring new ways to orchestrate your classroom or
            need guidance on our platform, our team is ready to assist you in
            designing the perfect digital workspace.
          </p>
        </section>

        {/* ── Content Grid ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-40 pointer-events-none" />

            <form className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-sm text-on-surface font-medium"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="bg-surface-container-highest border-none rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all duration-300"
                  id="name"
                  name="name"
                  placeholder="Professor Jane Doe"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-sm text-on-surface font-medium"
                  htmlFor="email"
                >
                  Institutional Email
                </label>
                <input
                  className="bg-surface-container-highest border-none rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all duration-300"
                  id="email"
                  name="email"
                  placeholder="jane.doe@university.edu"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-sm text-on-surface font-medium"
                  htmlFor="message"
                >
                  Your Inquiry
                </label>
                <textarea
                  className="bg-surface-container-highest border-none rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all duration-300 resize-none"
                  id="message"
                  name="message"
                  placeholder="How can we help refine your classroom experience?"
                  rows={5}
                />
              </div>

              <button
                className="mt-4 bg-gradient-to-r from-primary to-secondary text-on-primary rounded-xl py-4 px-8 font-label font-medium text-lg hover:opacity-90 hover:shadow-md transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 w-full md:w-auto md:self-start"
                type="submit"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[1.25rem]">
                  send
                </span>
              </button>
            </form>
          </div>

          {/* Right: Contact Details & FAQ */}
          <div className="lg:col-span-5 flex flex-col gap-16 pt-4 lg:pt-8">
            {/* Direct Contact */}
            <div className="flex flex-col gap-8">
              <h2 className="font-headline text-2xl text-on-surface">
                Direct Channels
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="font-label text-sm text-on-surface-variant">
                      General Inquiries
                    </span>
                    <a
                      className="font-body text-on-surface font-medium hover:text-primary transition-colors"
                      href="mailto:hello@classteams.edu"
                    >
                      hello@classteams.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="font-label text-sm text-on-surface-variant">
                      Global Headquarters
                    </span>
                    <span className="font-body text-on-surface font-medium">
                      100 Academic Way
                      <br />
                      Cambridge, MA 02142
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-6">
              <h2 className="font-headline text-2xl text-on-surface">
                Common Inquiries
              </h2>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-body font-medium text-on-surface mb-2">
                    How quickly can I deploy ClassTeams?
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Most institutions are fully onboarded within 48 hours,
                    depending on current SIS integration complexities.
                  </p>
                </div>
                <div>
                  <h3 className="font-body font-medium text-on-surface mb-2">
                    Do you offer dedicated enterprise support?
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Yes, all enterprise tiers include a dedicated success manager
                    and 24/7 priority technical routing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
