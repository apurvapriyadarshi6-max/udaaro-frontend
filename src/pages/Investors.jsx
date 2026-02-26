import { useState } from "react";

function Investors() {
  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://udaaro-backend.onrender.com"
      : "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm: "",
    investmentFocus: "",
    preferredStage: "",
    ticketSize: "",
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
      const response = await fetch(`${API_BASE}/api/investors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Investor registered successfully!");
        setFormData({
          name: "",
          email: "",
          firm: "",
          investmentFocus: "",
          preferredStage: "",
          ticketSize: "",
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
          Investors Network
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
            name="firm"
            value={formData.firm}
            onChange={handleChange}
            placeholder="Investment Firm"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="investmentFocus"
            value={formData.investmentFocus}
            onChange={handleChange}
            placeholder="Investment Focus (Fintech, AI, SaaS...)"
            className="w-full border p-3 rounded"
            required
          />

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

          <input
            type="text"
            name="ticketSize"
            value={formData.ticketSize}
            onChange={handleChange}
            placeholder="Average Investment Ticket (e.g. $25,000)"
            className="w-full border p-3 rounded"
          />

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

export default Investors;