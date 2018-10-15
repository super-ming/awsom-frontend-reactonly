import React from 'react';
import '../styles/_loading.css';

const Loading = () => (
  <div className="container">
    <div className="freetrial_description">
      <h1>Loading</h1>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  </div>
);

export default Loading;
