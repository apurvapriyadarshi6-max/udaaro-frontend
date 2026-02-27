import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Admin() {
  const navigate = useNavigate();

  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://udaaro-backend.onrender.com"
      : "http://localhost:5000";

  const [activeTab, setActiveTab] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [founders, setFounders] = useState([]);
  const [investors, setInvestors] = useState([]);
  const [mentors, setMentors] = useState([]);

  /* ================= AUTH + AUTO REFRESH ================= */

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ================= FETCH DATA ================= */

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const [fRes, iRes, mRes] = await Promise.all([
        fetch(`${API_BASE}/api/founders`, { headers }),
        fetch(`${API_BASE}/api/investors`, { headers }),
        fetch(`${API_BASE}/api/mentors`, { headers }),
      ]);

      if (fRes.status === 401 || iRes.status === 401 || mRes.status === 401) {
        localStorage.removeItem("token");
        navigate("/admin-login");
        return;
      }

      const foundersData = await fRes.json();
      const investorsData = await iRes.json();
      const mentorsData = await mRes.json();

      setFounders(Array.isArray(foundersData) ? foundersData : []);
      setInvestors(Array.isArray(investorsData) ? investorsData : []);
      setMentors(Array.isArray(mentorsData) ? mentorsData : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  /* ================= DELETE ================= */

  const handleDelete = async (type, id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/api/${type}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        navigate("/admin-login");
        return;
      }

      if (res.ok) {
        fetchData();
      } else {
        alert("Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const filterData = (data) =>
    data.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );

  /* ================= ANALYTICS ================= */

  const userDistribution = [
    { name: "Founders", count: founders.length },
    { name: "Investors", count: investors.length },
    { name: "Mentors", count: mentors.length },
  ];

  const getMonthlyData = () => {
    const monthMap = {};

    [...founders, ...investors, ...mentors].forEach((item) => {
      if (!item.createdAt) return;

      const date = new Date(item.createdAt);
      if (isNaN(date)) return;

      const key = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      monthMap[key] = (monthMap[key] || 0) + 1;
    });

    return Object.entries(monthMap)
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => a.month.localeCompare(b.month));
  };

  const monthlyGrowth = getMonthlyData();

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-8">
            Admin Panel
          </h2>

          {["dashboard", "founders", "investors", "mentors"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="text-red-600 text-sm hover:underline"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10">

        {activeTab === "dashboard" && (
          <>
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {userDistribution.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-xl shadow border">
                  <h3 className="text-gray-500 text-sm">{item.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    {item.count}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold mb-4">User Distribution</h3>
                {userDistribution.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={userDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#2563eb" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-semibold mb-4">Monthly Growth</h3>
                {monthlyGrowth.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="count" stroke="#2563eb" />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab !== "dashboard" && (
          <>
            <input
              type="text"
              placeholder="Search by name..."
              className="mb-6 p-3 border rounded w-full max-w-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {filterData(
                activeTab === "founders"
                  ? founders
                  : activeTab === "investors"
                  ? investors
                  : mentors
              ).map((item) => {
                const recordId = item._id || item.id;

                return (
                  <div key={recordId} className="bg-white p-6 rounded-xl shadow border">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>

                    {item.email && <p>Email: {item.email}</p>}
                    {item.phone && <p>Phone: {item.phone}</p>}
                    {item.startup && <p>Startup: {item.startup}</p>}
                    {item.industry && <p>Industry: {item.industry}</p>}
                    {item.stage && <p>Stage: {item.stage}</p>}
                    {item.fundingNeeded && <p>Funding: {item.fundingNeeded}</p>}
                    {item.description && <p>Description: {item.description}</p>}
                    {item.firm && <p>Firm: {item.firm}</p>}
                    {item.investmentFocus && <p>Focus: {item.investmentFocus}</p>}
                    {item.preferredStage && <p>Preferred Stage: {item.preferredStage}</p>}
                    {item.ticketSize && <p>Ticket Size: {item.ticketSize}</p>}
                    {item.expertise && <p>Expertise: {item.expertise}</p>}
                    {item.experienceLevel && <p>Experience: {item.experienceLevel}</p>}
                    {item.availability && <p>Availability: {item.availability}</p>}

                    <button
                      onClick={() => handleDelete(activeTab, recordId)}
                      className="mt-4 text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;