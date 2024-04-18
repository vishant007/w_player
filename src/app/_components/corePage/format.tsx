export interface Card {
	id: string;
	title: string;
	artist: string;
	imageUrl: string;
	isTrending: boolean;
}

export interface CarouselProps {
	title: string;
	cards: Card[];
}

export interface SidebarState {
	isSidebarVisible: boolean;
	setSidebarVisibility: (visible: boolean) => void;
}
