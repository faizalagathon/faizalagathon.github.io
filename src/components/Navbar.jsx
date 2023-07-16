import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <Link to="/">
          Web Portfolio
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/skills">Skills</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
