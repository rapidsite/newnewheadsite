const Faq = () => {
  const faqData = [
    {
      question: "How does the process work?",
      answer:
        "We like to discuss what your needs are, figure out exactly what you want, & make sure we are all on the same page. Once we have all the information & photos needed, we will sign a one-page agreement, get you started on the appropriate plan, & build your site to the specifications we discussed. When your website is complete, we will prepare it to be linked to your domain & reach out to you so we can begin the deployment process. Within 10-15 minutes of beginning the deployment process, your site should be live & linked to your .com or other domain.",
    },
    {
      question: "Are there any additional costs?",
      answer:
        "At Rapidsite, we are very transparent with our pricing. The price you see for the plans is the price you will pay monthly. We have no other hidden fees or added overage charges. To get started, there will be a one time fee associated with building & setting up the site, but after that is done the only thing you will ever be charged is the monthly fee.",
    },
    {
      question: "What do you mean by advanced plugins & widgets? ",
      answer:
        "Under the Pro plan or higher, you will have access to certain advanced integrations such as appointment booking, time slot reservations, online ordering, on-site instant quotes, custom inquiry request forms, CRM suite tools, & more.",
    },
    {
      question:
        "What is the Dashboard?",
      answer:
        "We are currently working on the Client Dashboard for our Pro plan & higher clients. This will allow you to edit content, images, words, & anything else on your site directly from the Dashboard. This will also allow you to access integrations from your site directly inside the Dashabord. For example, if you have custom inquiry forms integrated on your website, you could access, view, change, respond, or download any of those responses. On top of that, you will have access to the full CRM suite tools so all leads coming from your site will be organized in one place for you to stay on top of.",
    },
    {
      question: "Am I able to cancel & part ways at anytime?",
      answer:
        "We'd hate to see you go, but we do have an easy path to cancel your account with us. All website assets will be owned by you & you are free to continue using them. All we require is a 30 day notice & we will prepare your website assets for offboarding.",
    },

  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
