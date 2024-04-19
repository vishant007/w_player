import { Card, CardProps } from './songList';

interface CardListProps {
	cards: CardProps[];
	sectionTitle: string;
}

export const CardList = ({ cards, sectionTitle }: CardListProps) => {
	return (
		<div className='card-list mx-4'>
			<div className='text-base mb-4 font-semibold text-white  hover:shadow-lg hover:cursor-pointer hover:text-secondary transition-all duration-300'>
				{sectionTitle}
			</div>
			<div className='cards '>
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
	);
};
