import React from 'react';

const Insight = () => {
	const insightArr = [
		{
			image:
				'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.?',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta beatae earum saepe! Magni repudiandae, necessitatibus ab dolores amet sint?',
		},
		{
			image:
				'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.?',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta beatae earum saepe! Magni repudiandae, necessitatibus ab dolores amet sint?',
		},
		{
			image:
				'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.?',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta beatae earum saepe! Magni repudiandae, necessitatibus ab dolores amet sint?',
		},
	];
	return (
		<div>
			{insightArr.map((item) => (
				<div className="border-2 mb-14 ">
					<div className="relative">
						<img src={item.image} alt="main pix" />
						<div className="absolute bottom-0 px-3 py-2 bg-gray-300 text-blue-600 opacity-80 uppercase font-bold">
							sponsored insight
						</div>
					</div>
					<div className="p-5">
						<h6 className="text-black font-bold text-xl">{item.headline}</h6>
						<p className="uppercase text-gray-700 text-xs">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Insight;
