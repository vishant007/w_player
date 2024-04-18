import React from 'react';
import SearchBar from './searchBar';
import { Poster } from './poster';
import CardCarousel from './cardCarousel';
import { trendingCards } from '../../dummyData/Songs';
import { newReleaseCards } from '../../dummyData/newReleases';

export default function CorePage() {
	return (
		<div className='bg-bgs w-full h-full flex flex-col gap-2 overflow-y-auto px-4 md:px-8 scrollbar-hide'>
			<div>
				<SearchBar />
				<div className=''>
					<Poster />
					<CardCarousel title={`Hello , Vishant`} cards={trendingCards} />

					<CardCarousel title='New Releases For You' cards={newReleaseCards} />
				</div>
			</div>
		</div>
	);
}
