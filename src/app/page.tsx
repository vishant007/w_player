'use client';
import CorePage from './_components/corePage/corePage';
import Player from './_components/audioPlayer/player';
import RightSidebar from './_components/rightBar/rightBar';
import Sidebar from './_components/leftBar/leftBar';
import useSidebarStore from './_components/mobileBar/sidebarlayout';
import MobileSidebar from './_components/mobileBar/mobileBar';

export default function Home() {
	const { isSidebarVisible, setSidebarVisibility } = useSidebarStore();

	const closeSidebar = () => {
		setSidebarVisibility(false);
	};
	return (
		<>
			<MobileSidebar isVisible={isSidebarVisible} />
			<div
				className={`flex flex-col h-screen font-sans ${
					isSidebarVisible ? 'opacity-50' : 'opacity-100'
				}`}
			>
				<div className='flex flex-row justify-between max-h-[87vh]'>
					<Sidebar />
					<CorePage />
					<RightSidebar />
				</div>
				<div className='max-h-[12vh]'>
					<Player />
				</div>
			</div>
		</>
	);
}
