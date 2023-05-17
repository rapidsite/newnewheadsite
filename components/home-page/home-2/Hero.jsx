import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <Link
                href="/contact"
                className="slogan d-inline-block"
              >
                <strong className="fw-500">Offer: </strong>
                 Get your first month free!
                <i className="fas fa-chevron-right" />
              </Link>
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Leave your website to the
                <span className="position-relative ms-3 d-inline-block">
                  pros. <img src="/images/shape/shape_95.svg" alt="shape" />
                </span>
                
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                Already have a website? Let us redesign it for you & take your business to the next level.
              </p>
              <Link
                href="/contact"
                className="btn-fourteen fw-500 tran3s"
              >
                Plans starting at only $49.95/mo
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/ils_05.svg"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
