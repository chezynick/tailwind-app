import React from 'react';

const Header = () => {
	return (
		<div className="bg-red-600 text-white flex justify-between p-4 ml-10 mr-10 items-end">
			<p>Mon, Dec 21, 2020</p>
			<h1 className="text-7xl font-black font-serif ">Newsweek</h1>
			<div className="flex items-end">
				<h6 className="pr-3 uppercase">LogIn</h6>
				<div className="bg-yellow-400 text-black font-bold uppercase rounded-full py-1 px-6">Subscribe</div>
			</div>
		</div>
	);
};

export default Header;
