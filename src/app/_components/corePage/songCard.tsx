import type { Card } from './format';
import img1 from '@/app/_assets/img1.jpg';
import Image from 'next/image';

const SongCard: React.FC<{ card: Card }> = ({ card }) => {
	return (
		<div className='flex-shrink-0 w-[45vw] md:w-[15vw] flex flex-col gap-2 cursor-pointer hover:text-blue-600 transition-all duration-300'>
			<div className='relative overflow-hidden aspect-square rounded-2xl'>
				<div className='transition-transform duration-300 hover:scale-110'>
					<Image
						src={img1}
						alt={card.title}
						width={300}
						height={300}
						className='aspect-square rounded-2xl hover:opacity-70 transition-all duration-300'
					/>
				</div>
			</div>

			<div className='font-bold md:text-xl -mb-2'>{card.title}</div>
			<p className='text-gray-700 text-sm md:text-base'>{card.artist}</p>
		</div>
	);
};

export default SongCard;
