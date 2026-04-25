import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "ClassTeams - Experiment Sandbox",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const tableRows = [
  {
    id: "alpha",
    avatar: (
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi8lTGV2OyFVgYhgsGkCvHZzunVy56G2n7QKgrBexHypm4jYe1HWHN3tmsFwP7bvzDb9SXvl07XpSRb00g6V1GT8KjKRfv_jTJm6Rhw-2nNCThXcGTeHqmL9k6koUAVoMRUyDYOxCTyhlPkp57CkdGIDs2c4EVIUMgzLRSPG75cLVwUgJuAeIiShgMMsIm9ZUC6Xv6kplu3G03sbUkY3vTRsb6hzoApgRgBbOP7fZEKe8U8pbSMEB749pxFyiwOcNgZLQVXLsIOuM"
        alt="Avatar"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full object-cover"
      />
    ),
    name: "Alpha Cluster",
    statusClass:
      "inline-flex items-center gap-1.5 bg-tertiary-container/30 text-tertiary-dim rounded-full px-2.5 py-0.5 text-xs font-medium",
    dotClass: "w-1.5 h-1.5 rounded-full bg-tertiary-dim",
    status: "Operational",
    throughput: "94.2k req/s",
    rowBg: "bg-surface",
  },
  {
    id: "beta",
    avatar: (
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline text-xs font-bold">
        B
      </div>
    ),
    name: "Beta Instance",
    statusClass:
      "inline-flex items-center gap-1.5 bg-surface-container-high text-on-surface-variant rounded-full px-2.5 py-0.5 text-xs font-medium",
    dotClass: "w-1.5 h-1.5 rounded-full bg-outline",
    status: "Standby",
    throughput: "12.0k req/s",
    rowBg: "bg-surface-container-lowest",
  },
  {
    id: "gamma",
    avatar: (
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline text-xs font-bold">
        G
      </div>
    ),
    name: "Gamma Node",
    statusClass:
      "inline-flex items-center gap-1.5 bg-error-container/30 text-error rounded-full px-2.5 py-0.5 text-xs font-medium",
    dotClass: "w-1.5 h-1.5 rounded-full bg-error",
    status: "Degraded",
    throughput: "4.1k req/s",
    rowBg: "bg-surface",
  },
];

const chartBars = [
  { height: "40%", color: "bg-primary/20 hover:bg-primary/40" },
  { height: "65%", color: "bg-primary/30 hover:bg-primary/50" },
  { height: "85%", color: "bg-secondary/40 hover:bg-secondary/60" },
  { height: "50%", color: "bg-primary/20 hover:bg-primary/40" },
  { height: "30%", color: "bg-primary/10 hover:bg-primary/30" },
  { height: "90%", color: "bg-tertiary-container/60 hover:bg-tertiary-container/80" },
  { height: "70%", color: "bg-primary/40 hover:bg-primary/60" },
];

export default function ExperimentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto px-8 py-16">
        {/* ── Header ── */}
        <header className="mb-16 max-w-3xl">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
            UI Components{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Sandbox
            </span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A high-fidelity playground testing the core tokens of{" "}
            <strong>The Digital Atheneum</strong> design system. Exploring
            depth, glassmorphism, and intentional asymmetry.
          </p>
        </header>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ── Column 1: Interactive Elements ── */}
          <section className="lg:col-span-4 flex flex-col gap-8">
            {/* Controls Card */}
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-8">
              <div>
                <h2 className="font-headline text-xl font-bold text-on-surface mb-6 tracking-tight">
                  Interactive States
                </h2>

                {/* Buttons */}
                <div className="flex flex-col gap-4 mb-8">
                  <label className="font-label text-xs font-semibold tracking-wider text-outline uppercase">
                    Primary Action
                  </label>
                  <button className="bg-gradient-to-r from-primary to-secondary text-on-primary rounded-xl px-6 py-3 font-headline font-semibold text-sm transition-all duration-300 hover:opacity-90 shadow-sm flex items-center justify-center gap-2">
                    Execute Workflow
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>

                  <label className="font-label text-xs font-semibold tracking-wider text-outline uppercase mt-2">
                    Secondary / Ghost
                  </label>
                  <button className="bg-surface-container-lowest text-on-surface rounded-xl px-6 py-3 font-headline font-semibold text-sm transition-all duration-300 hover:bg-surface-container ring-1 ring-outline-variant/15 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      settings
                    </span>
                    Configuration
                  </button>
                </div>

                {/* Chips */}
                <div className="mb-8">
                  <label className="font-label text-xs font-semibold tracking-wider text-outline uppercase mb-3 block">
                    Semantic Tags
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-container text-on-tertiary-container rounded-full px-3 py-1 font-label text-xs font-medium">
                      Experimental
                    </span>
                    <span className="bg-surface-container-highest text-on-surface-variant rounded-full px-3 py-1 font-label text-xs font-medium">
                      Draft
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 font-label text-xs font-medium">
                      Reviewed
                    </span>
                  </div>
                </div>

                {/* Input */}
                <div>
                  <label className="font-label text-xs font-semibold tracking-wider text-outline uppercase mb-3 block">
                    Text Input
                  </label>
                  <input
                    className="w-full bg-surface-container-highest text-on-surface placeholder:text-on-surface-variant/50 rounded-lg px-4 py-3 font-body text-sm border-0 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-300"
                    placeholder="Enter API Key..."
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Typography Card */}
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-center">
              <h3 className="font-headline text-on-surface font-extrabold text-3xl tracking-tight mb-2">
                Typography
              </h3>
              <p className="font-body text-on-surface-variant text-sm mb-6">
                Display-lg paired with Label-md creates a sophisticated rhythmic
                flow.
              </p>
              <div className="space-y-4 border-t border-outline-variant/15 pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-headline font-bold text-lg text-on-surface">
                    Plus Jakarta
                  </span>
                  <span className="font-label text-xs text-outline">
                    Headline
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-body text-sm text-on-surface-variant">
                    Inter Regular
                  </span>
                  <span className="font-label text-xs text-outline">
                    Body Utility
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Column 2: Data & Focus Pane ── */}
          <section className="lg:col-span-8 flex flex-col gap-8">
            <div className="bg-surface-container-lowest/80 backdrop-blur-2xl rounded-xl p-1 lg:p-8 relative overflow-hidden ring-1 ring-outline-variant/15 h-full flex flex-col">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-end mb-8 px-4 lg:px-0 mt-4 lg:mt-0">
                  <div>
                    <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">
                      Active Datasets
                    </h2>
                    <p className="font-body text-sm text-on-surface-variant mt-1">
                      Simulated load of real-time metrics without structural
                      borders.
                    </p>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors p-2 rounded-full hover:bg-primary-container/20">
                    <span className="material-symbols-outlined">
                      filter_list
                    </span>
                  </button>
                </div>

                {/* Data Table */}
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-transparent">
                        {["Entity Name", "Status", "Throughput", "Actions"].map(
                          (col, i) => (
                            <th
                              key={col}
                              className={`py-4 px-4 font-label text-xs font-semibold text-outline uppercase tracking-wider${
                                i >= 2 ? " text-right" : ""
                              }`}
                            >
                              {col}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                      {tableRows.map((row) => (
                        <tr
                          key={row.id}
                          className={`${row.rowBg} transition-colors hover:bg-surface-container-low`}
                        >
                          <td className="py-4 px-4 font-medium text-on-surface">
                            <div className="flex items-center gap-3">
                              {row.avatar}
                              {row.name}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={row.statusClass}>
                              <span className={row.dotClass} />
                              {row.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right text-on-surface-variant font-mono text-xs">
                            {row.throughput}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="text-outline hover:text-on-surface transition-colors">
                              <span className="material-symbols-outlined text-[20px]">
                                more_vert
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Chart */}
                <div className="mt-auto pt-8">
                  <label className="font-label text-xs font-semibold tracking-wider text-outline uppercase mb-4 block px-4 lg:px-0">
                    Throughput Variance
                  </label>
                  <div className="w-full h-32 rounded-lg bg-gradient-to-b from-surface-container-low to-surface-container-lowest relative overflow-hidden flex items-end px-2 pb-2 gap-1">
                    {chartBars.map((bar, i) => (
                      <div
                        key={i}
                        className={`w-full ${bar.color} rounded-t-sm transition-colors`}
                        style={{ height: bar.height }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
