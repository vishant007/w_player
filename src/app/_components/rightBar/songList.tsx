import Image from 'next/image';

export interface CardProps {
	title: string;
	subtitle: string;
	image: string;
	time: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, image, time }) => {
	return (
		<div className='card flex flex-row items-center text-white my-2 text-xs  hover:text-blue-600 transition-all duration-300 hover:cursor-pointer'>
			<Image
				src={image}
				alt={'alt'}
				className='break-words mr-4 aspect-square'
				width={32}
				height={32}
			/>
			<div className='flex flex-col justify-between flex-1 my-1'>
				<div>
					<div className=' font-bold'>{title}</div>
					<div className='text-primary'>{subtitle}</div>
				</div>
			</div>
			<p className='text-primary'>{time}</p>
		</div>
	);
};
