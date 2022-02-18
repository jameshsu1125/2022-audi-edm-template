import { useEffect } from 'react';
import '../Setting/styles.css';
import imageA from './img/a.png';
import imageB from './img/b.png';
import './main.less';

const links = [
	{
		name: 'fixed size mode. (標準版)',
		image: imageB,
		url: 'https://app.postdrop.io/share/wJKdmfCCBtFgJuA9_9NOsu-nU83-nGz-m3Rx',
	},
	{
		name: 'fluid size mode. (滿版)',
		image: imageA,
		url: 'https://app.postdrop.io/share/4X7NOYVQHOu0jAnpC538cYADLSduiJADC8nU',
	},
];

const Index = () => {
	useEffect(() => {}, []);
	return (
		<div className='Index'>
			{links.map((e) => {
				const { name, url, image } = e;
				return (
					<div key={name}>
						<h1>{name}</h1>
						<img src={image} alt='' />
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
							<span>Template</span>
						</button>
					</div>
				);
			})}
			<div className='how'>
				<h1>
					<a href='./how.html' target='_blank'>
						如何發信?
					</a>
				</h1>
			</div>
		</div>
	);
};
export default Index;
