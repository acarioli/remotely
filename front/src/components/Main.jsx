import '../css/Main.css';

function Main() {
  return (
    <div className="container-cover">
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
                    <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Work from anywhere
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Forget the old rules. You can have the best job. Right now. Right here. 
                      <br/>
                      Find your ideal job and change your life.
                    </p>
                    <a
                      href="usertype"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                      >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>     
    </div>
  );
}

export default Main;
