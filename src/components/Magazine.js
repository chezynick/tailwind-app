import React from 'react';

const Magazine = () => {
	const newsArr = [
		{
			image:
				'https://images.pexels.com/photos/2738919/pexels-photo-2738919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/3058391/pexels-photo-3058391.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
		{
			image:
				'https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			sub: 'lifestyle',
			dept: 'health',
			headline:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima suscipit nostrum vitae odit voluptatum.',
		},
	];

	return (
		<div className="mx-10 px-5 bg-white h-auto mb-10 ">
			<div className="flex justify-center items-center border-b-2 border-grey-100 pb-5">
				<div className="bg-red-500 text-white font-xl font-bomd h-10 w-10 flex justify-center items-center">
					N
				</div>
				<h5 className="uppercase font-bold text-black text-lg px-5">in the magazine</h5>
			</div>
			<div className="grid grid-cols-4 justify-between gap-10 mt-10">
				{newsArr.map((item) => (
					<div>
						<img src={item.image} alt="main pic" />
						<div className="flex mt-3">
							<div className="bg-red-500 text-white px-5 font-bold uppercase">{item.sub}</div>
							<div className="bg-white text-red-500 px-5 font-bold uppercase">{item.dept}</div>
						</div>
						<h6 className="font-bold text-lg">{item.headline}</h6>
					</div>
				))}
			</div>
		</div>
	);
};

export default Magazine;
