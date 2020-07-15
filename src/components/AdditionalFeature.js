import React from 'react';
import { connect } from "react-redux";

import { addFeature } from '../actions/titleActions';


const AdditionalFeature = props => {
  console.log(props);

  const onClickFeature = e => {
    e.preventDefault();
    props.addFeature(props.feature);
  };

  return (
    <li>
      <button onClick={onClickFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, 
  { addFeature }
)(AdditionalFeature);
