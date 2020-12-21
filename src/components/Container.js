import React from 'react';

//import components
import Featured from './Featured';
import Main from './Main';
import SideBar from './SideBar';
const Container = () => {
	return (
		<div className="ml-10 mr-10 bg-white h-screen grid grid-cols-16 grid-gap-10">
			<Featured />
			<Main />
			<SideBar />
		</div>
	);
};

export default Container;
