import React from 'react';

import Insight from './Insight';
const SideBar = () => {
	const newsArr = [
		{
			image: 'https://americanmind.org/wp-content/uploads/2018/11/RReno.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
		{
			image:
				'https://image.freepik.com/free-photo/closeup-portrait-sensual-blonde-woman-against-red-background-studio_73504-364.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
		{
			image:
				'https://image.freepik.com/free-photo/closeup-portrait-sensual-blonde-woman-against-red-background-studio_73504-364.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
		{
			image:
				'https://image.freepik.com/free-photo/closeup-portrait-sensual-blonde-woman-against-red-background-studio_73504-364.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
		{
			image:
				'https://image.freepik.com/free-photo/closeup-portrait-sensual-blonde-woman-against-red-background-studio_73504-364.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
		{
			image:
				'https://image.freepik.com/free-photo/closeup-portrait-sensual-blonde-woman-against-red-background-studio_73504-364.jpg',
			headline: 'Vaccination prioroty? government officials shouls wait their turn',
			author: 'holly f lynch',
		},
	];
	return (
		<div className="p-4 ">
			<h6 className="text-gray-400 font-bold pb-3 uppercase">the debate</h6>
			<div className="border-t-4 border-b-4 border-gray-300 ">
				<div className="flex my-2 items-center">
					<div>
						<img
							className="rounded-full bg-red-500 h-14 w-14 mr-10 "
							src="https://americanmind.org/wp-content/uploads/2018/11/RReno.jpg"
							alt="rrreno"
						/>
					</div>
					<div>
						<h6 className="text-black font-bold ">Nationmalism and Populism Are the GOP's Future</h6>
						<p className="uppercase text-gray-400 text-sm">
							by <span className="font-bold ">R.r.reno</span>
						</p>
					</div>
				</div>
				<div className="flex bg-black text-gray-300 rounded-full h-8 w-8 flex items-center justify-center m-auto">
					vs
				</div>
				<div className="flex my-2 items-center">
					<div>
						<h6 className="text-black font-bold ">A Defense of Zombie Conservatism</h6>
						<p className="uppercase text-gray-400 text-sm">
							by <span className="font-bold ">charles c.w. cooke</span>
						</p>
					</div>
					<div>
						<img
							className="rounded-full bg-red-500 h-14 w-14 "
							src="https://americanmind.org/wp-content/uploads/2018/11/RReno.jpg"
							alt="otherguy"
						/>
					</div>
				</div>
			</div>
			<h6 className="text-gray-400 font-bold pb-3 uppercase mt-5">opinion</h6>
			<div className="divide-y-2 ">
				{newsArr.map((item) => (
					<div className="flex justify-between items-center py-5">
						<div>
							<img className="rounded-full h-14 w-14 mr-14 " src={item.image} alt="journalist" />
						</div>
						<div>
							<h6 className="text-black font-bold text-sm">{item.headline}</h6>
							<p className="uppercase text-gray-400 text-xs">by {item.author}</p>
						</div>
					</div>
				))}
			</div>
			<Insight />
		</div>
	);
};

export default SideBar;
