import React from 'react';
import { connect } from "react-redux";

import { addFeature } from '../actions/titleActions';


const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, 
  { addFeature }
)(AdditionalFeature);
