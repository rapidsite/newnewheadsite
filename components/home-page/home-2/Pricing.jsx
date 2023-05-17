import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Essentials",
    details: "Freelancers & small businesses",
    price: "$49",
    billing: "per month",
    limit: "with unlimited support",
    btnClass: "trial-button",
    features: [
      "Unlimited 24/7 Support",
      "All essential pages",
      "Contact forms to your email",
      "Live chat on your site",
      "Guaranteed uptime",
      "Referral Program",
      "$750 one-time startup fee"
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Pro",
    details: "Small / medium businesses",
    price: "$149",
    billing: "per month",
    limit: "entirety of Essentials +",
    btnClass: "trial-button",
    features: [
      "Dashboard (coming soon)",
      "Unlimited revisions",
      "Advanced plugins & widgets",
      "Unlimited pages & blog",
      "Yearly SEO Audits",
      "Annual Redesign/Update",
      "$1,250 one-time startup fee"
    ],
    bgColor: "#E4F2FF",
    animDelay: "100",
  },
  {
    id: 3,
    name: "Corporate",
    details: "Large Businesses / Franchises",
    price: "$349",
    billing: "per month",
    limit: "entirety of Pro + ",
    btnClass: "trial-button",
    features: [
      "Full suite of SEO tools",
      "Monthly reports/audits",
      "Dedicated IT support channel",
      "User authentication systems",
      "Stripe Checkout Integration",
      "Referral++ Program",
      "$2,499 one-time startup fee"
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  {
    id: 4,
    name: "Enterprise",
    details: "For complex custom solutions",
    price: "$599",
    billing: "per month",
    limit: "entirety of Corporate +",
    btnClass: "trial-button",
    features: [
      "Complete ground-up rework",
      "Custom solutions integrations",
      "Dedicated support agent",
      "Databases, multi-location, etc.",
      "Advanced security/SEO audits",
      "All hands on deck",
      "$3,999 one-time startup fee"
    ],
    bgColor: "#E4F4F1",
    animDelay: "300",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
      {plans.map((plan) => (
        <div
          className="col-xl-3 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
          data-aos-delay={plan.animDelay}
        >
          <div
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500">
                <sup>$</sup>
                {plan.price}
              </div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block">{plan.limit}</em>
              </div>
            </div>
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="/contact" className={plan.btnClass}>
              Start your 30 day free trial
            </a>
            <div className="trial-text pt-25 tx-dark">
              No obligation, cancel any time
            </div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
