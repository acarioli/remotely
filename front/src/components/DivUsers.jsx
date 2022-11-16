import "../css/DivUsers.css";

function DivUsers() {
  return (
  <div>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://elcomercio.pe/resizer/A_I4P69SAvd0y5SrCer9K3LavKE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6B6WDTELIJHVLAKNB7MDOUFVIU.jpg" className="d-block mx-lg-auto img-fluid bg-dark rounded-2 shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">I'm freelacer</h1>
        <p className="lead">Meet clients you’re excited to work with and take your career or business to new heights.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a
          href="/signup"
          button type="button"
          className="btn btn-dark btn-lg px-4 me-md-2"
          >
          Find Job
          </a>
      </div>
    </div>
  </div>
  </div>
  <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://s3.amazonaws.com/semanaeconomica.bucket/semanaeconomica2/articles/banner/30267_1621138909_banner.jpg" className="d-block mx-lg-auto img-fluid bg-dark rounded-2 shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">I'm recruiter</h1>
      <p className="lead">Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <a
          href="/signup"
          button type="button"
          className="btn btn-dark btn-lg px-4 me-md-2"
          >
          Find Talent
          </a>
      </div>
      
    </div>
    
  </div>
  
</div>

</div>

  );
}
  
export default DivUsers;
