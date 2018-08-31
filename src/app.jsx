import React from 'react';
import ReactDOM from 'react-dom';

import { BrowerRouter as Router, Switch, Redirect, Route} from 'react-router-dom'


//页面
import Home from 'page/home/index.jsx';

class App extends React.Component{
	render(){
		return (
			<Router>
				<Home />
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);