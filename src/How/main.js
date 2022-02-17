import { useEffect } from 'react';
import '../Index/main.less';
import '../Setting/styles.css';

const way = [
	{
		name: 'outlook 桌面版',
		url: 'https://tsengseal.medium.com/%E7%B4%80%E9%8C%84-%E7%94%A8-outlook-%E5%81%9A-edm-%E7%9A%84%E5%BE%AE%E5%88%B6%E9%9C%B8%E6%94%BB%E7%95%A5-92fb4ff71d37',
	},
	{
		name: 'outLook 線上版',
		url: './online.html',
	},
];

const How = () => {
	useEffect(() => {}, []);
	return (
		<div className='How'>
			{way.map((e) => {
				const { name, url } = e;
				return (
					<div key={name}>
						<h1>{name}</h1>
						<button
							type='button'
							className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
							onClick={() => {
								window.open(url);
							}}
						>
							<svg
								className='fill-current w-4 h-4 mr-2'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
							</svg>
							<span>Read me</span>
						</button>
					</div>
				);
			})}
		</div>
	);
};
export default How;
