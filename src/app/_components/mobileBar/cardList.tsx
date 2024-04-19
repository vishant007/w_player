import { Card, CardProps } from '../rightBar/songList';

interface CardListProps {
	cards: CardProps[];
	sectionTitle: string;
}

export const CardList = ({ cards, sectionTitle }: CardListProps) => {
	return (
		<div className='card-list mx-4'>
			<div className='flex flex-row mb-4 justify-between items-end'>
				<div className='text-base font-semibold text-white  hover:shadow-lg hover:cursor-pointer hover:text-secondary transition-all duration-300'>
					{sectionTitle}
				</div>
				<div className='text-xs text-secondary'>see all</div>
			</div>

			<div className='cards '>
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
	);
};
