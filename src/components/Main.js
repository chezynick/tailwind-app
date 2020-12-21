import React from 'react';

const Main = () => {
	const newsArr = [
		{
			image: 'https://www.arnoldskeys.com/assets/blog/fire.jpg',
			image2:
				'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/07/16/istock-491391396.jpg?width=982&height=726',
			headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, consectetur.',
		},
		{
			image: 'https://www.arnoldskeys.com/assets/blog/fire.jpg',
			image2:
				'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/07/16/istock-491391396.jpg?width=982&height=726',
			headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		},
		{
			image: 'https://www.arnoldskeys.com/assets/blog/fire.jpg',
			image2:
				'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/07/16/istock-491391396.jpg?width=982&height=726',
			headline: 'Lorem ipsum dolor sit amet. Cupiditate, consectetur.',
		},
	];
	return (
		<div className="p-4 ">
			<h6 className="text-gray-400 font-bold pb-3 uppercase">top story</h6>
			<div>
				<div className="relative mb-3">
					<img
						src="https://images.pexels.com/photos/1181344/pexels-photo-1181344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="main pic"
					/>
					<div className=" w-auto opacity-90 px-4  py-1 absolute bottom-0 left-0 bg-gray-300 text-red-600">
						U.S.
					</div>
				</div>
				<h5 className="font-bold text-black text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis!
				</h5>
				<p className="text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste omnis quibusdam odit quis
					alias dicta molestias libero! Molestiae natus excepturi illum id reiciendis delectus?
				</p>
			</div>
			<div>
				<h6 className="text-gray-500 font-bold pb-3 uppercase">my turn</h6>
				<div className="grid grid-cols-3 gap-x-5">
					{newsArr.map((item) => (
						<div>
							<img src={item.image} alt="news photo" />
							<h6 className="py-5 text-gray-500 font-bold">'{item.headline}'</h6>
						</div>
					))}
				</div>
			</div>
			<div>
				<h6 className="text-gray-500 font-bold pb-3 uppercase">culture & travel</h6>
				<div className="grid grid-cols-3 gap-x-5">
					{newsArr.map((item) => (
						<div>
							<img src={item.image2} alt="news photo" />
							<h6 className="py-5 text-gray-500 font-bold">'{item.headline}'</h6>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Main;
