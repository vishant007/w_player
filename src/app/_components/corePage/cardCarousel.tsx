'use client';
import React, { useEffect, useRef, useState } from 'react';
import SongCard from './songCard';
import type { CarouselProps } from './format';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardCarousel: React.FC<CarouselProps> = ({ title, cards }) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	const checkScrollPosition = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
			setIsAtStart(scrollLeft === 0);
			setIsAtEnd(scrollLeft + offsetWidth >= scrollWidth);
		}
	};

	useEffect(() => {
		checkScrollPosition();
		const refCurrent = carouselRef.current;
		refCurrent?.addEventListener('scroll', checkScrollPosition, {
			passive: true,
		});
		return () => {
			refCurrent?.removeEventListener('scroll', checkScrollPosition);
		};
	}, []);

	const scroll = (direction: 'left' | 'right') => {
		if (carouselRef.current) {
			const scrollAmount = carouselRef.current.offsetWidth / 2;
			if (direction === 'left') {
				carouselRef.current.scrollTo({
					left: carouselRef.current.scrollLeft - scrollAmount,
					behavior: 'smooth',
				});
			} else {
				carouselRef.current.scrollTo({
					left: carouselRef.current.scrollLeft + scrollAmount,
					behavior: 'smooth',
				});
			}
		}
	};

	return (
		<div className='flex flex-col my-4'>
			<div className='flex flex-row justify-between items-center mb-2 md:mb-4 md:px-6'>
				<div className='md:text-2xl font-bold'>{title}</div>
				<div className='text-sm md:text-base 4k:text-xl text-primary hover:text-white transition-all duration-300 cursor-pointer'>
					see all
				</div>
			</div>

			<div className='flex flex-row items-center md:my-2'>
				<div
					className={`cursor-pointer -translate-x-2 hidden md:flex ${
						isAtStart ? 'opacity-0 pointer-events-none' : 'opacity-100'
					}`}
					onClick={() => scroll('left')}
				>
					<ArrowBackIosIcon />
				</div>
				<div
					ref={carouselRef}
					className='flex overflow-x-auto md:w-[70vw] gap-[2vw] md:gap-[1.3vw] scrollbar-hide'
				>
					{cards.map((card) => (
						<SongCard key={card.id} card={card} />
					))}
				</div>
				<div
					className={`cursor-pointer translate-x-2 hidden md:flex ${
						isAtEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
					}`}
					onClick={() => scroll('right')}
				>
					<ArrowForwardIosIcon />
				</div>
			</div>
		</div>
	);
};

export default CardCarousel;
