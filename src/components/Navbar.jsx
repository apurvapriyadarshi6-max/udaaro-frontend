import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">
        Udaaro
      </h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/investors">Investors</Link>
        <Link to="/mentors">Mentors</Link>
        <Link to="/apply">Apply as Founder</Link>
        <Link to="/admin-login" className="text-primary font-medium">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;