import React, {useState, useEffect} from 'react'
import './Questions.css'
import Accordion from './Accordion'

import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {
useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState(
    "How do I choose the right travel destination for me?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right travel destination for me?"
            desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Our site gives the idea of the best time to visit the destination."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="How can I find budget-friendly travel options?"
            desc="Our site provides various options of hotels, restaurants and transportation from where you can choose your suitable option."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What essential items should I pack for my adventure?"
            desc="Pack appropriate clothing, toiletries, travel documents, essential medications, and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear)."
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading" data-aos="fade-up">
            <h4>Do you have any specific question?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our dedicated team will get in touch
              with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid" data-aos="fade-up">
            <input type="email" placeholder="Enter email address" />
            <textarea placeholder="Enter your question here"></textarea>
            <button className="btn" data-aos="fade-up">
              Submit Iquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions