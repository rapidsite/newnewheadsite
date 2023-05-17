import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={150}
                height={55}  />
              </Link>
            </div>
          </li>
          {/* End li */}


          <li className="nav-item">
            <Link className="nav-link" href="/" role="button">
              Home
            </Link>
          </li>

          {/* End li (home mega menu) */}

          <li className="nav-item">
            <Link className="nav-link" href="/pages-menu/about-us-v1" role="button">
              About Us
            </Link>
          </li>
          
          {/* End li (portfolio) */}
          
          <li className="nav-item dropdown mega-dropdown-sm">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Packages
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="row">
                  {menuItems.map((menu, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="menu-column">
                        <h6 className="mega-menu-title">{menu.title}</h6>
                        <ul className="style-none mega-dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link href={item.link} className="dropdown-item">
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </li>


          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
