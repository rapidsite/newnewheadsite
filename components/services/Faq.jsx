const accordionItems = [
  {
    id: 1,
    title: "Web Design & Development",
    content:
      "We'll build a website that represent your brand at it's core and optimizes the user experience.",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    content:
      "Stay on top of local searches and build a strategy to bulk your online presence.",
  },
  {
    id: 3,
    title: "Custom Plugins & Widgets",
    content:
      "From online ordering to appointment booking, we can implement anything you need to make your business thrive.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
