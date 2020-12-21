import React from 'react';

//import components
import Header from './components/Header';
import Nav from './components/Nav';
import Trending from './components/Trending';
import Container from './components/Container';

function App() {
	return (
		<div className="App bg-gray-100">
			<Header />
			<Nav />
			<Trending />
			<Container />
		</div>
	);
}

export default App;
