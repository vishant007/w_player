import { ProfileComponent } from './profile';
import { CardList } from './cardList';
import { recentlyPlayed } from '../../../dummyData/recentlyPlayed';
import { PlayListButton } from './playlist';

export default function RightSidebar() {
	return (
		<div className='bg-bgp w-[22vw] hidden xl:flex xl:flex-col overflow-y-auto scrollbar-hide'>
			<ProfileComponent name='Vishant Shah' />
			<CardList cards={recentlyPlayed} sectionTitle='Recently Played' />
			<CardList cards={recentlyPlayed} sectionTitle='My Playlist' />
			<PlayListButton />
		</div>
	);
}
