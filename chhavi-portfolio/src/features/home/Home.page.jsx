export default function Home() {
  return (
    <section className="flex flex-col gap-20">

      {/* ================= HERO ================= */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-600">Chhavi Kohli</span> 👋
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Specialist Software Engineer with <strong>7.5+ years</strong> of experience
          building scalable, high-performance web applications using
          <strong> Angular (7–15+)</strong>, <strong>Node.js</strong>, and
          <strong> TypeScript</strong>.
        </p>

        <p className="mt-4 text-gray-500">
          Strong in modular architecture, lazy loading, real-time systems,
          data visualisation, and mentoring teams in Agile environments.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#/resume"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Core Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Angular",
            "TypeScript",
            "JavaScript",
            "RxJS / NgRx",
            "Node.js",
            "MongoDB",
            "AWS & Azure",
            "CI/CD & Git"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-lg p-4 text-center shadow-sm text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Experience Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">
              LTIMindtree
            </h3>
            <p className="text-sm text-gray-600">
              Built reusable Angular components and real-time amCharts dashboards
              for insurance analytics platforms. Improved delivery time by 40%.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">
              Prodeasy
            </h3>
            <p className="text-sm text-gray-600">
              Led Angular front-end architecture and built a real-time
              collaborative whiteboard using Fabric.js.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">
              Evon Technologies
            </h3>
            <p className="text-sm text-gray-600">
              Developed Angular applications with payments, subscriptions,
              NgRx state management, and real-time APIs.
            </p>
          </div>

        </div>
      </div>

      {/* ================= CONTACT STRIP ================= */}
      <div className="bg-white rounded-xl p-8 shadow-sm text-center">
        <h3 className="text-xl font-semibold">
          Let’s build something impactful
        </h3>

        <p className="text-gray-600 mt-2">
          Based in Noida • Open to interesting frontend & full-stack roles
        </p>

        <a
          href="mailto:chhavikohli96@gmail.com"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
        >
          chhavikohli96@gmail.com
        </a>
      </div>

    </section>
  );
}
