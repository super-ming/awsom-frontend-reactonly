import React from 'react';
import '../styles/_match.css';

const NoMatch = () => (
  <div className="container">
    <div className="match">
      <h2>Sorry, we could't find a match for you.</h2>
      <p>
        Please send us an e-mail, and we'll connect you to a great teacher
        within 24 hours!
      </p>
      <div className="matchdetails">
        <div>Email: HELLO@AWSOM.INFO</div>
        <div>Phone: (425) 951-9758</div>
      </div>
    </div>
  </div>
);

export default NoMatch;
