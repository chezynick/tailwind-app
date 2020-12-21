import React from 'react';

//import components
import Featured from './Featured';
import Magazine from './Magazine';
import Main from './Main';
import SideBar from './SideBar';
const Container = () => {
	return (
		<div>
			<div className="ml-10 mr-10 bg-white h-auto grid grid-cols-16 grid-gap-10">
				<Featured />
				<Main />
				<SideBar />
			</div>
			<Magazine />
		</div>
	);
};

export default Container;
