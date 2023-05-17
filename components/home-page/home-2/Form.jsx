import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://brqaxjmymjjndkxbivgd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycWF4am15bWpqbmRreGJpdmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNjc4MzcsImV4cCI6MTk5Nzg0MzgzN30.2HgSpUxTn2oOeDWEYALCEQsruIG4W9w5czjbhDuGehU')


const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(".com");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    const { error } = await supabase
    .from('newsletter')
    .insert({ email: inputValue})
  };

  return (
    <form onSubmit={handleSubmit} className="d-md-flex align-items-center">
      <div className="input-wrapper position-relative">
        <input
          type="text"
          placeholder="Enter your email here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        
        {/* /.select-wrapper */}
      </div>
      {/* /.input-wrapper */}
      <button
        type="submit"
        className="search-btn text-uppercase text-white fw-500 fs-18 tran3s"
      >
        SUBSCRIBE
      </button>
    </form>
  );
};

export default Form;
