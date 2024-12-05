import { createRef } from "react";

function CardDiscover(props) {
  const ref = createRef()

  return (
    <div onClick={(e) => {window.open(props.data.companyLink, '_blank').focus()}}className="cardd card mb-3">
      <img src={props.data.companyLogo} className="card-img-top card-company-logo"/>
      <div className="card-body">
        <h3 className="card-text">{props.data.name}</h3>
        <p className="card-text">{props.data.description}</p>
        <p className="card-text">Location: {props.data.location}<br/>Email: {props.data.email}</p>
      </div>
    </div>
  );
}

export default CardDiscover;
