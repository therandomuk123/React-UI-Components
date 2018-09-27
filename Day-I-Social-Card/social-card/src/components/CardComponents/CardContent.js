import React from "react";
import "./Card.css";

const CardContent = props => {
  return (
    <div class="card-content-wrapper">
      <div className="card-content-title">Get started with react</div>
      <div className="card-content-txt">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </div>
      <div className="card-content-link-txt">reactjs.org</div>
    </div>
  );
};

export default CardContent
