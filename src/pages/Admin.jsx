import { useEffect, useState } from "react";

function Admin() {
  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://udaaro-backend.onrender.com"
      : "http://localhost:5000";

  const [activeTab, setActiveTab] = useState("founders");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  /* ================= FETCH DATA ================= */

  async function fetchData(type) {
    try {
      const res = await fetch(`${API_BASE}/api/${type}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Failed to fetch");
        return;
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  /* ================= DELETE ================= */

  async function handleDelete(type, id) {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/api/${type}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        fetchData(type);
      } else {
        alert("Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  }

  /* ================= SEARCH ================= */

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["founders", "investors", "mentors"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
          className="ml-auto text-red-600"
        >
          Logout
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 border rounded"
      />

      {/* Data Cards */}
      <div className="grid gap-6">
        {filteredData.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-xl shadow border"
          >
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>Email: {item.email}</p>

            {/* Dynamic fields */}
            {item.firm && <p>Firm: {item.firm}</p>}
            {item.investmentFocus && (
              <p>Focus: {item.investmentFocus}</p>
            )}
            {item.preferredStage && (
              <p>Preferred Stage: {item.preferredStage}</p>
            )}
            {item.ticketSize && (
              <p>Ticket Size: {item.ticketSize}</p>
            )}
            {item.startup && <p>Startup: {item.startup}</p>}
            {item.industry && <p>Industry: {item.industry}</p>}
            {item.stage && <p>Stage: {item.stage}</p>}
            {item.fundingNeeded && (
              <p>Funding Needed: {item.fundingNeeded}</p>
            )}
            {item.expertise && <p>Expertise: {item.expertise}</p>}
            {item.experienceLevel && (
              <p>Experience: {item.experienceLevel}</p>
            )}
            {item.availability && (
              <p>Availability: {item.availability}</p>
            )}

            <button
              onClick={() => handleDelete(activeTab, item._id)}
              className="mt-4 text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500">
            No records found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;