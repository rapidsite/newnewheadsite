import Form from "./Form";



const BannerSubscribe = () => {
  return (
    <div className="fancy-short-banner-nine mt-200 lg-mt-80" data-aos="fade-up">
      <div className="bg-wrapper position-relative pt-90 pb-110 lg-pt-50 lg-pb-60">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="title">
                <h6 className="fw-normal text-uppercase tx-dark">
                  Let us send you tips!
                </h6>
                <h2 className="m0 fw-bold tx-dark pe-xl-5">
                  We want to give you free tips to improve your website.
                </h2>
              </div>
              {/* /.title */}
            </div>
            <div className="col-lg-5">
              <p className="m0 tx-dark fs-20 lh-lg ps-xxl-5 md-mt-20">
                We will send you a weekly newsletter containing various changes you could implement to make your website better!
              </p>
            </div>
          </div>
          <div className="domain-search-form mt-50 lg-mt-30">
            <Form />
          </div>
          {/* /.domain-search-form */}
        </div>
      </div>
      {/* /.bg-wrapper */}
    </div>
  );
};

export default BannerSubscribe;
