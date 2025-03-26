import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg sticky-top py-4 navbarBG">
      <div className="container">
        <NavLink className="navbar-brand text-white text-uppercase fw-bolder fs-2" to={'/'} >Start Framework</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mx-2" to={'/about'} >About</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mx-2" to={'/portfolio'}>Portfolio</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold fs-6 mx-2" to={'/contact'} >Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>)
}
