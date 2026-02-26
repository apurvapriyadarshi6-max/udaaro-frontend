import { useState } from "react";

function ApplyFounder() {
 const API_BASE = import.meta.env.PROD
  ? "https://udaaro-backend.onrender.com"
  : "http://localhost:5000";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startup: "",
    industry: "",
    stage: "",
    fundingNeeded: "",
    description: "",
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
      const response = await fetch(`${API_BASE}/api/founders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          startup: "",
          industry: "",
          stage: "",
          fundingNeeded: "",
          description: "",
        });
      } else {
        setError(data.message || "Submission failed");
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
          Apply as a Founder
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="startup"
            value={formData.startup}
            onChange={handleChange}
            placeholder="Startup Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="Industry (Fintech, AI, EdTech...)"
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Startup Stage</option>
            <option value="Idea">Idea Stage</option>
            <option value="MVP">MVP</option>
            <option value="Revenue">Revenue Generating</option>
            <option value="Scaling">Scaling</option>
          </select>

          <input
            type="text"
            name="fundingNeeded"
            value={formData.fundingNeeded}
            onChange={handleChange}
            placeholder="Funding Needed (e.g. $50,000)"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your startup"
            rows="4"
            className="w-full border p-3 rounded"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ApplyFounder;