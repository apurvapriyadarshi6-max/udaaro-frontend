import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
          Udaaro
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/apply">Apply as Founder</Link>
          <Link to="/admin-login" className="text-primary font-medium">
            Admin
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-4 bg-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/investors" onClick={() => setIsOpen(false)}>Investors</Link>
          <Link to="/mentors" onClick={() => setIsOpen(false)}>Mentors</Link>
          <Link to="/apply" onClick={() => setIsOpen(false)}>Apply as Founder</Link>
          <Link to="/admin-login" onClick={() => setIsOpen(false)} className="text-primary font-medium">
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;