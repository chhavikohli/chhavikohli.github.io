import { NavLink } from "react-router-dom";

const linkBase =
  "px-4 py-2 rounded-md text-sm font-medium transition";

const linkInactive =
  "text-gray-600 hover:text-blue-600 hover:bg-blue-50";

const linkActive =
  "text-blue-600 bg-blue-50";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-lg font-bold text-gray-800">
          Chhavi Kohli
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Blogs
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
