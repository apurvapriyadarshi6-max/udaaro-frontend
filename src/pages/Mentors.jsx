import { useState } from "react";

function Mentors() {
  const API_BASE = import.meta.env.PROD
  ? "https://udaaro-backend.onrender.com"
  : "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experienceLevel: "",
    preferredStage: "",
    availability: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/mentors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Mentor registered successfully!");
        setFormData({
          name: "",
          email: "",
          expertise: "",
          experienceLevel: "",
          preferredStage: "",
          availability: "",
        });
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Server not responding");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Mentor Community
        </h2>

        {error && (
          <p className="mb-4 text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        {message && (
          <p className="mb-4 text-green-600 text-sm text-center">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            placeholder="Expertise (AI, Marketing, Legal...)"
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Experience Level</option>
            <option value="1 years">1 years</option>
            <option value="1+ years">1+ years</option>
            <option value="5+ years">5+ years</option>
            <option value="10+ years">10+ years</option>
            <option value="15+ years">15+ years</option>
          </select>

          <select
            name="preferredStage"
            value={formData.preferredStage}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Preferred Startup Stage</option>
            <option value="Idea">Idea Stage</option>
            <option value="MVP">MVP</option>
            <option value="Revenue">Revenue Generating</option>
            <option value="Scaling">Scaling</option>
          </select>

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Availability</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="On Demand">On Demand</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Mentors;