import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"
import portfolio from "../../assets/chhavi_portfolio.svg"

const linkBase =
  "px-4 py-2 rounded-md text-sm font-medium transition";

const linkInactive =
  "text-gray-600 hover:text-blue-600 hover:bg-blue-50";

const linkActive =
  "text-blue-600 bg-blue-50";

export default function Navbar() {

  const [scrolled, setScrollState] = useState(false);
  useEffect(() => {
    const sentinel = document.getElementById('sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollState(!entry.isIntersecting)
      },
      { rootMargin: "-65px 0px 0px", threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();

  }, [])
  return (
    <header className={`sticky top-0 z-50 text-gray-600 body-fonttransition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-10" src={portfolio}></img>
          <span className="ml-3 text-xl text-blue-500">Portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
      </div>
    </header>

  );
}
