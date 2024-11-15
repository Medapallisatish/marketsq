import {Link} from "react-router-dom"

const Header=()=>(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><h3>Brisphere</h3></Link>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="#Discover">Discover</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#About us">About Us</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
)
export default Header