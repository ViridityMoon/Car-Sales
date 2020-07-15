import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/titleActions'

const AddedFeature = props => {
  console.log(props);
  
  const onClickFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature);
  };

  return (
    <li>
      <button onClick={onClickFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null,
  { removeFeature }
)(AddedFeature);
