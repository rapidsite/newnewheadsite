import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar from "./service-details/ProgressBar";
import Faq from "../../components/home-page/home-2/Faq";
import Social from "./service-details/Social";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Pro" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Service Details
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Pro
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30"></h2>
                <p className="text-lg tx-dark">
                  A comprehensive overview of the Pro package.
                </p>
                <img
                  src="/images/media/3.png"
                  alt="media"
                  className="main-img-meta"
                />
                <p>
                  The Pro package is for the small to medium sized businesses that need a little bit more that just the basics. This usually consists of 5-10 pages, custom inquiry forms, online ordering, appointment booking, etc. You will also get live chat capabilities, 24/7 support, yearly SEO audits, blog capabilities, unlimited revisions, & guaranteed uptime. This package is perfect for businesses who are ready to level up their online presence & take on new work.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Overview</h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>Take your online presence to the next level</li>
                        <li>Includes advanced plugins & 5-10 pages</li>
                        <li>Fast turnaround - 3-7 business days</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">The Goal</h4>
                      <p className="pe-xxl-5">
                        The goal of the Pro package is level up your online presence. Drive more business via more advanced capabilites.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div>
                <p>
                  If you are looking for more capability such as custom user logins, multi-location design, or any custom integrations, the Corporate or Enterprise plans may be the best for you. Feel free to reach out for any questions you may have.
                </p>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  FAQ
                </h3>
                <Faq />
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Services</h4>
                  <ul className="style-none">
                    <li>
                      <a href="/pages-menu/essentials">Essentials</a>
                    </li>
                    <li className="current-page">
                      <a href="/pages-menu/pro">Pro</a>
                    </li>
                    <li>
                      <a href="/pages-menu/corporate">Corporate</a>
                    </li>
                    <li>
                      <a href="/pages-menu/enterprise">Enterprise</a>
                    </li>
                  
                  </ul>
                </div>
                {/* /.service-category */}

                
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80 wow fadeInUp">
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
