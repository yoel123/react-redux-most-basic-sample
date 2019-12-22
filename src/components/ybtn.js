import React from "react";
import { connect } from "react-redux";

//redux action
const action = {
type: "BUTTON_CLICK" 
};

//inline react style 
var ycss = {
	margin: "0px auto",
    fontSize: "20px",
    display: "block",
    marginTop: "51px",
	background: "#1588ff",
    color: "white",
    borderRadius: "5px",
    padding: "6px",
    border: "#328cea 2px solid"
};

//btn component
const Ybtn = (props) => (
	<button style={ycss} onClick={() => props.dispatch(action)}>
		{props.buttonText}
	</button>
)

// inject the redux state variables as props to the component
const mapStateToProps = (state) => { return { buttonText: state.buttonText }; };
/*
//old way of doing things
function mapStateToProps(state) {
  return {...state, buttonText: state.buttonText };
}
*/

export default connect(mapStateToProps)(Ybtn);