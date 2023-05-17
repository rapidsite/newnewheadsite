const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/pages-menu/about-us-v1" },
      { label: "Contact Us", url: "/contact" },
    ],
  },

  {
    title: "Products",
    links: [
      { label: "Essentials", url: "/pages-menu/essentials" },
      { label: "Pro", url: "/pages-menu/pro" },
      { label: "Corporate", url: "/pages-menu/corporate" },
      { label: "Enterprise", url: "/pages-menu/enterprise" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
