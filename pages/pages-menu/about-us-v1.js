import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Partners from "../../components/services/Partners";
import Faq from "../../components/services/Faq";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Block from "../../components/services/Block";
import Team3 from "../../components/team/Team3";
import Link from "next/link";
import VideoBlock from "../../components/about/VideoBlock";
import Counter from "../../components/about/Counter";

const AboutUsV1 = () => {
  const features = [
    { text: "Personalized plans." },
    { text: "24/7 support." },
    { text: "Easy revisions." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us V1" />

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
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  More About us.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Transforming the Web.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our History &amp; Goal.</h6>
                <p className="text-lg tx-dark">
                &nbsp;&nbsp;&nbsp;&nbsp;We're fueled by a story of collaboration and a passion for revolutionizing the web. 
                Founded by industry pioneers John Poe and Scott Brown, our journey began as they joined forces while working on a groundbreaking web3 project. 
                Their shared dedication and expertise quickly led them to take charge of the project's development, where they seamlessly merged their skills and embarked on a transformative path.
                </p>
                <br/>
                <p className="text-lg tx-dark">
                &nbsp;&nbsp;&nbsp;&nbsp;During their ventures, John and Scott encountered a significant challenge: the scarcity of dependable website designers. 
                Determined to bridge this gap, they resolved to create a company that would redefine excellence in web design, catered to a broader audience.
                </p>
                <br/>
                <p className="text-lg tx-dark">
                &nbsp;&nbsp;&nbsp;&nbsp;Welcome to Rapidsite, where innovation takes precident. 
                We're' on a mission to deliver exceptional design solutions that transform your online presence and captivate your audience. 
                Our team thrives on pushing boundaries, crafting immersive user experiences, and ensuring stunning visual aesthetics across all platforms.
                </p>
                <p className="text-lg tx-dark">
                  
                </p>
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* <!-- 
			=============================================
				Feature Section Fifty Two
			============================================== 
			--> */}
      {/*<VideoBlock /> */}

      {/* <!-- /.fancy-feature-fiftyTwo --> */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">WHY US</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Everything with Marketing.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Turn your website into a lead generating machine that promotes your business and keeps customers engaged.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
                <div className="d-inline-flex align-items-center mt-35 lg-mt-20">
                  
                  
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      
      {/* /.team-section-two */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      
      {/* /.feedback-section-eleven */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">SOLUTION</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Digital solutions for your business.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Do you have more questions? Just send us a message.
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/contact" className="fw-500 tran3s">
                    Get in touch
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        {/* /.container */}

       
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have A Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Book a free consultation.
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

export default AboutUsV1;
