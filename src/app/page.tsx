'use client';

import Sidebar from './_components/leftBar/leftBar';
import CorePage from './_components/corePage/corePage';
import RightSidebar from './_components/rightBar/rightBar';

export default function Home() {
	return (
		<>
			<div className='flex flex-row justify-between max-h-[87vh]'>
				<Sidebar />
				<CorePage name='Vishant' />
				<RightSidebar />
			</div>
		</>
	);
}
