import React from 'react';
import SearchBar from './searchBar';
export default function CorePage() {
	return (
		<div className='bg-bgs w-full h-full flex flex-col gap-2 overflow-y-auto px-4 md:px-8 scrollbar-hide'>
			<div>
				<SearchBar />
				<div className=''></div>
			</div>
		</div>
	);
}
