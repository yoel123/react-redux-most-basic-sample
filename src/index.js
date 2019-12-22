import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import redux
import { Provider } from "react-redux";
import { createStore } from "redux"; 

// takes the current state, and an action, and returns the newState
function reducer(state = { buttonText: "Not Clicked Yet" }, action)
{
	if(action.type === "BUTTON_CLICK")
	{
		var ret = "";
		
		if(state.buttonText == "Not Clicked Yet"){ret = "Clicked"}
		if(state.buttonText == "Clicked"){ret = "Not Clicked Yet"}
		
		return { buttonText: ret };
	}
	
	return  state;
}//end reducer

//redux store
const store = createStore(reducer);

//remember to seround your root component with Provider with store att
ReactDOM.render(
<Provider store={store} >
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


