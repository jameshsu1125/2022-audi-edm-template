import { useEffect } from 'react';
import '../Setting/styles.css';
import A from './img/0.png';
import B from './img/1.png';
import C from './img/2.png';
import D from './img/3.png';
import E from './img/4.png';
import F from './img/5.png';
import G from './img/6.png';
import H from './img/7.png';
import './main.less';

const setting = [
	{ name: '取得增益集', image: A },
	{ name: '找出insert HTML by xxx', image: B },
	{ name: '使用增益集', image: C },
	{ name: '點Get Started!按鈕', image: D },
	{ name: '有一個填入html的輸入框', image: E },
	{ name: '到Postdrop找出template按Copy按鈕', image: F },
	{ name: '貼入增益集的輸入框', image: G },
	{ name: '完成', image: H },
];

const Online = () => {
	useEffect(() => {}, []);
	return (
		<div className='Online' style={{ overflow: 'scroll' }}>
			{setting.map((e) => {
				const { name, image } = e;
				return (
					<div key={name}>
						<h1>{name}</h1>
						<img src={image} alt='' />
					</div>
				);
			})}
		</div>
	);
};
export default Online;
