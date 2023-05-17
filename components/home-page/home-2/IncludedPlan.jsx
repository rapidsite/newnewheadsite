const cards = [
  {
    id: 1,
    icon: "/images/icon/retention1.png",
    title: "More customers",
    description:
      "Over 30% of business is conducted online. Having a strong online presence is neccesary to bring you more leads in the long term.",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/up.png",
    title: "Better search rankings",
    description:
      "Having an outdated, non-maintained website will lower your SEO ranking. Ranking higher on Google could be key to your online success.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/retention2.png",
    title: "Customer retention",
    description: "75% of consumers admit to making judgements on a company's credibility based on the company's website design.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/nav1.png",
    title: "Local success",
    description:
      "With a good amount of traffic to your new site, you could easily outrank competition & gain more search-based customers looking for your service.",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/zap.png",
    title: "Effective marketing tool",
    description:
      "By being one of the top results in your line of business, you essentially have a free marketing pipeline that drives you intent-based leads.",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/pro1.png",
    title: "Professional image",
    description:
      "A well designed, optimized, functional website creates a positive first impression and establishes credibility for your business or brand..",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} width={30} height={30} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
