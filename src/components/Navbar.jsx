import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../data/navbar-links"
import logo from "../assets/images/Image.png"

const Navbar = () => {
  const location = useLocation()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div >
      <nav className="flex justify-between items-center h-20 mx-auto px-10 border border-red-500">
          <div className="flex flex-row justify-between">
            <Link to="/">
              <img src={logo} alt="Logo" height={32} loading="lazy" />
            </Link>
            <p className="z-10">Career Mentor Hub</p>
          </div>
          <ul className="flex gap-x-6 text-richblack-25">
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
};

export default Navbar;