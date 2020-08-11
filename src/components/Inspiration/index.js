import React from 'react';
import './Inspiration.css';
import QuoteSVG from '../QuoteSVG';
const inspiration = require('./inspiration');

const Inspiration = () => (
  <section id="inspiration" className="Inspiration">
    <div className="Inspiration-Container">
      <h1 className="Inspiration-Title">
        Inspiration
      </h1>
      <p className="Inspiration-Description">
        The goal of this hackathon is to develop tools that would
        make our day-to-day work more productive, fun and joyful.
        Below are some quotes from the survey that may serve as
        inspiration for you:
      </p>
      <div className="Inspiration-Posts">
        {
          inspiration.map((quote) => (
            <div className="Inspiration-Post">
              <div className="Inspiration-Post-Quote">
                <QuoteSVG/>
              </div>
              <div className="Inspiration-Post-Msg">
                { quote.text }
              </div>
              <div className="Inspiration-Post-Tags">
                { quote.tags }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default Inspiration;