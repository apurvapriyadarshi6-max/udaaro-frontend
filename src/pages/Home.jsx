import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6 leading-tight">
            Powering the Next Generation of Startups
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Udaaro brings together ambitious founders, visionary investors,
            and experienced mentors into one high-impact ecosystem built
            for long-term startup growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/apply"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Apply as Founder
            </Link>

            <Link
              to="/investors"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Join as Investor
            </Link>

            <Link
              to="/mentors"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Become a Mentor
            </Link>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-12">
            How Udaaro Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">1. Apply</h3>
              <p className="text-gray-600">
                Submit your profile as a founder, investor, or mentor to
                become part of the Udaaro ecosystem.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">2. Match & Connect</h3>
              <p className="text-gray-600">
                We connect startups with aligned investors and mentors
                based on stage, industry, and vision.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">3. Scale</h3>
              <p className="text-gray-600">
                Unlock funding, strategic guidance, and partnerships
                to accelerate sustainable growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-12">
            Why Choose Udaaro
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Curated Network</h3>
              <p className="text-gray-600">
                Access serious investors and experienced mentors
                who are aligned with early-stage innovation.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Growth First</h3>
              <p className="text-gray-600">
                We focus on sustainable scaling, strategic clarity,
                and long-term value creation.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Simple & Transparent</h3>
              <p className="text-gray-600">
                No noise. No unnecessary complexity.
                Just meaningful startup connections.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Building an Early-Stage Ecosystem
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Udaaro is in its foundational growth phase. We are building a
            high-quality startup ecosystem from the ground up — bringing together
            serious founders, thoughtful investors, and experienced mentors
            who believe in long-term impact.
          </p>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            If you want to be part of something meaningful from day one,
            this is your opportunity.
          </p>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Big?
        </h2>

        <Link
          to="/apply"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Started Today
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-700 text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Udaaro. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;