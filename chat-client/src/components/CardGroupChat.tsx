import React from 'react';
import sample from '../assets/sample.png'
import { Pin } from './icons';
import Touchable from './Touchable';

function CardGroupChat() {

	return (
		<Touchable>
			<div className="w-full rounded-lg p-4 bg-white shadow-lg cursor-pointer">
				<div className='flex flex-row gap-4'>
					<div>
						<img
							src={sample}
							alt='sample.png'
							width={64}
							height={64}
						/>
					</div>
					<div className='flex flex-col'>
						<div className='flex flex-row justify-between'>
							<div className='flex flex-row gap-x-1'>
								<h3 className='text-base font-semibold'>{'Purple haze'}</h3>
								<Pin/>
							</div>
							<p className='text-sm text-[#8C8098]'>{'11:36'}</p>
						</div>
						<div>
							<p className='text-sm'>{'Esther Howard'}</p>
						</div>
						<div className='flex flex-row'>
							<p className='text-sm text-one-line text-[#8C8098]'>{'I posted a new video on YouTube'}</p>
							<div className='text-sm font-medium rounded-full bg-[#8667F2] w-[20px] h-[20px] grid place-content-center text-[#ffff]'>
								2
							</div>
						</div>
					</div>
				</div>
			</div>
		</Touchable>
	);
}

export default React.memo(CardGroupChat);