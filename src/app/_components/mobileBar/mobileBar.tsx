import { CardList } from './cardList';
import { ProfileComponent } from './profile';
import { recentlyPlayed } from '../../../dummyData/recentlyPlayed';
import { PlayListButton } from './playlist';
import { useEffect } from 'react';

interface MobileSidebarProps {
	isVisible: boolean;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isVisible }) => {
	return (
		<div
			className={`transform top-0 left-0 w-[75%] bg-bgp fixed h-screen overflow-auto ease-in-out transition-all duration-500 z-50 flex flex-col justify-between ${
				isVisible ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className='div'>
				<ProfileComponent name='Vishant Shah' />
				<div className='div'>
					<CardList cards={recentlyPlayed} sectionTitle='Recently Played' />
					<CardList cards={recentlyPlayed} sectionTitle='My Playlist' />
				</div>
			</div>

			<div className='flex-end'>
				<PlayListButton />
			</div>
		</div>
	);
};

export default MobileSidebar;
