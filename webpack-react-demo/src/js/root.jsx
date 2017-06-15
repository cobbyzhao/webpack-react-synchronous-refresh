import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

export default class Root extends React.Component{
	render() {
		return (
<div>
<Header />
</div>
			)
	}
}
ReactDOM.render(<Root/>, document.getElementById('app'));