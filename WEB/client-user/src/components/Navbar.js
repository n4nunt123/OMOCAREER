import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="container-fluid" id="nav">
      <nav className="navbar nav-global sticky-top flex-md-nowrap p-0 shadow">
        <div className="container-fluid row">
          <div className="col">
            <Link to={'/'} className="navbar-brand col">
              OMOCAREER
            </Link>
          </div>
          <div className="col-md-auto">
            <Link to={'home'} className="btn-nav">Home</Link>
          </div>
          <div className="col-md-auto">
            <Link to={'discover'} className="btn-nav">Discover</Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
