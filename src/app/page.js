export default function Portfolio() {
  const projects = [
    {
      title: "Petroleum Sales & Logistics Dashboard",
      desc: "Engineered an end-to-end petroleum sales and logistics analytics dashboard using SQL-generated relational business data and advanced Excel, simulating real-world fuel distribution operations with KPI reporting and SLA monitoring.",
      link: "https://github.com/AmitKodshetti/petroleum-sales-dashboard",
    },
    {
      title: "Retail Sales Analysis Dashboard",
      desc: "Developed an interactive Power BI dashboard to analyze revenue, profitability, regional trends, and product-level performance for retail business decision-making.",
      link: "#",
    },
    {
      title: "Pricing Strategy Analysis",
      desc: "Designed pricing intelligence models for 5000+ Amazon marketplace SKUs, analyzing competitor pricing and demand trends to support optimization strategies.",
      link: "#",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-80 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto text-center md:text-left z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Amit M. Kodshettiwar
        </h1>

        <p className="text-xl text-slate-300 mb-6">
          Assistant Manager – MIS | Data Analysis & Business Insights
        </p>

        <p className="max-w-3xl text-slate-400 leading-relaxed mx-auto md:mx-0">
          Data-driven MIS professional with 3+ years of experience in reporting,
          analysis, dashboarding, and performance tracking. Skilled in Excel,
          SQL, and Power BI to derive insights, automate reporting workflows,
          and support strategic business decisions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium"
          >
            📄 Download Resume
          </a>

          <a
            href="https://github.com/AmitKodshetti"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-blue-400 hover:bg-slate-800 transition duration-300 font-medium"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amit-k-b661831b3/"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-blue-400 hover:bg-slate-800 transition duration-300 font-medium"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative px-6 py-12 max-w-6xl mx-auto z-10">
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-slate-800 hover:border-blue-400 transition duration-300">
          <h2 className="text-3xl font-bold mb-6">Core Skills</h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-300">
            <p>• Excel Dashboarding & Advanced Formulas</p>
            <p>• SQL Data Extraction & Modeling</p>
            <p>• Power BI / Tableau Visualization</p>
            <p>• KPI Tracking & Trend Analysis</p>
            <p>• Reporting Automation</p>
            <p>• Business Performance Monitoring</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative px-6 py-12 max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>

        <div className="space-y-8 border-l-2 border-blue-500 pl-6">
          {[
            ["Assistant Manager – MIS", "Confidence Petroleum India Ltd. | Jan 2026 – Present", "Leading MIS reporting, KPI tracking, and reporting optimization across departments."],
            ["Pricing Analyst", "Altius Customer Service Pvt. Ltd. | Mar 2025 – Sep 2025", "Managed pricing strategy for 5000+ Amazon marketplace SKUs and competitor analysis."],
            ["MIS Executive", "Haldirams Foods International Pvt. Ltd. | Oct 2023 – Mar 2025", "Developed MIS reports, automated workflows, and improved reporting efficiency."],
            ["MIS Executive", "Age Old Spirits | Mar 2022 – Oct 2023", "Managed reporting data and improved operational reporting workflows."]
          ].map((exp, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{exp[0]}</h3>
              <p className="text-blue-400">{exp[1]}</p>
              <p className="text-slate-400 mt-2">{exp[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative px-6 py-12 max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-slate-800 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-cyan-500/20"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative px-6 py-12 max-w-6xl mx-auto z-10">
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-slate-800">
          <h2 className="text-3xl font-bold mb-4">Education</h2>

          <h3 className="text-xl font-semibold">
            B.Tech – Electrical Engineering
          </h3>
          <p className="text-blue-400">
            Dr. Babasaheb Ambedkar Technological University
          </p>
          <p className="text-slate-400">CGPA: 8.5 / 10</p>
        </div>
      </section>
    </div>
  );
}