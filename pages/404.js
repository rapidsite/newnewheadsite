import Link from "next/link";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Oops! you’re in the wrong place.</h3>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Back to home
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
