import React from 'react';

const Nav = () => {
	return (
		<div className="flex justify-start ml-10 mr-10 items-center border-b-2 border-grey-100 bg-white">
			<div className="flex divide-x-2 divide-grey-100 font-bold text-lg text-center items-center wrap-none">
				<h6 className="pr-4 pl-4 mt-4 mb-4">U.S</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">World</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Business</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Tech&Science</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Culture</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Newsgeek</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Sports</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Health</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">The Debate</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Vantage</h6>
				<h6 className="pr-4 pl-4 mt-4 mb-4">Weather</h6>
			</div>
			<div className="text-gray-400 pl-5">Search</div>
		</div>
	);
};

export default Nav;
