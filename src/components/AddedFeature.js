import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/titleActions'

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      <button onClick={removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null,
  { removeFeature }
)(AddedFeature);
