import React from 'react';
import posterpic from '../../_assets/poster.png';
import Image from 'next/image';

export const Poster: React.FC = () => {
	return (
		<div className='bg-pink-600 text-center px-2 py-3 md:p-6 md:m-8 rounded-xl flex flex-row justify-between'>
			<div className='content flex flex-col items-start justify-around lg:py-6'>
				<div className='text-[3vw] md:text-lg xl:text-xl 2xl:text-3xl 4k:text-4xl'>
					New Album
				</div>
				<div className='songName text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 4k:text-8xl leading-tight 2xl:leading-tight font-extrabold bg-clip-text text-transparent text-left  bg-gradient-to-r from-white via-white to-white'>
					THE NUCLEYA: CHAPTER ONE
				</div>
				<div className='albumName text-xs md:text-sm xl:text-xl 2xl:text-3xl 4k:text-4xl font-extrabold text-black '>
					TREASURE
				</div>
				<div className='bg-blue-600 text-[2.5vw] font-semibold p-2 md:p-4 md:text-xl rounded-lg md:rounded-2xl md:font-semibold hover:text-black hover:bg-pink-100 hover:scale-110 transition-all duration-500'>
					<button>LISTEN NOW</button>
				</div>
			</div>
			<div className='image xs:max-sm:w-[100vw] '>
				<Image src={posterpic} alt='hero' />
			</div>
		</div>
	);
};
