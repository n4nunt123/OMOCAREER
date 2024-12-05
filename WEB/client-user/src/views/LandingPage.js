import { Link } from 'react-router-dom';
import landingImage from '../assets/img-assets.png';

function Landing() {
  return (
    <section className="landing-page">
      <div className="container-fluid">
        <nav className="navbar navbar-landing sticky-top flex-md-nowrap p-0 shadow">
          <div className="container-fluid row">
            <div className="col">
              <Link to={'/'} className="navbar-brand col">
                OMOCAREER
              </Link>
            </div>
            <div className="col-md-auto">
              <Link to={'home'} className="btn-nav">Home</Link>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="landing-content">
        <div className="img-landing">
          <img src={landingImage} width="100%" alt=''/>
        </div>
        <div className="welcome-content">
          <div className="title-landing">
            <h2>OMOCAREER</h2>
          </div>
          <h5>Welcome to your opportunity, make your own miracle with us!</h5>
        </div>
      </div>
    </section>
  );
}

export default Landing;
