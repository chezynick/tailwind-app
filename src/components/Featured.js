import React from 'react';

const Featured = () => {
	const newsArr = [
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
	];
	return (
		<div className="p-4 ">
			<h6 className="text-gray-400 font-bold pb-3 uppercase">featured stories</h6>
			{newsArr.map((item) => (
				<div className="pb-5">
					<div className="relative mb-3">
						<img src={item.image} alt="news photo" />
						<div className=" w-auto opacity-90 px-4  py-1 absolute bottom-0 left-0 bg-gray-300 text-red-600">
							U.S.
						</div>
					</div>
					<h5 className="font-bold text-black text-xl">{item.headline}</h5>
					<p className="text-gray-500">{item.detail}</p>
				</div>
			))}
		</div>
	);
};

export default Featured;
