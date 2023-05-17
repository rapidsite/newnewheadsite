import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://brqaxjmymjjndkxbivgd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycWF4am15bWpqbmRreGJpdmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNjc4MzcsImV4cCI6MTk5Nzg0MzgzN30.2HgSpUxTn2oOeDWEYALCEQsruIG4W9w5czjbhDuGehU')


const ContactForm = () => {
  const handleSubmit = async (event) => {

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log(event)
    
    const { error } = await supabase
    .from('contactform')
    .insert({ name: name, email: email, message: message})

    
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Email Address*"
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                required="required"
                data-error="Please,leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              Send Message
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
