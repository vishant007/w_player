import { useState, memo, useCallback } from 'react';
import { SvgIconProps } from '@mui/material';
import Burger from '@mui/icons-material/MenuOpenRounded';
import Home from '@mui/icons-material/HomeRounded';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Discover from '@mui/icons-material/ExploreRounded';
import DiscoverOutlined from '@mui/icons-material/ExploreOutlined';
import Collections from '@mui/icons-material/CollectionsBookmarkRounded';
import CollectionsOutlined from '@mui/icons-material/CollectionsBookmarkOutlined';
import Download from '@mui/icons-material/GetAppRounded';
import DownloadOutlined from '@mui/icons-material/GetAppOutlined';
import Favourites from '@mui/icons-material/FavoriteRounded';
import FavouritesOutlined from '@mui/icons-material/FavoriteBorderRounded';
import LocalFiles from '@mui/icons-material/FolderRounded';
import LocalFilesOutlined from '@mui/icons-material/FolderOutlined';

type HoverIconProps = {
	OutlinedIcon: React.FC<SvgIconProps>;
	FilledIcon: React.FC<SvgIconProps>;
	descriptor: string;
};

const HoverIcon = memo(
	({ OutlinedIcon, FilledIcon, descriptor }: HoverIconProps) => {
		const [isHovered, setIsHovered] = useState(false);
		const handleMouseEnter = useCallback(() => setIsHovered(true), []);
		const handleMouseLeave = useCallback(() => setIsHovered(false), []);

		return (
			<div
				className='group icon-box'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{isHovered ? (
					<FilledIcon className='icon' />
				) : (
					<OutlinedIcon className='icon' />
				)}
				<span className='icon-descriptor'>{descriptor}</span>
			</div>
		);
	}
);

export default function Sidebar() {
	const [sidebarVisible, setSidebarVisible] = useState(true);

	const handleBurgerClick = useCallback(() => {
		setSidebarVisible((prev) => !prev);
	}, []);
	return (
		<div className='hidden md:flex w-[18vw] bg-bgp flex-col justify-between min-h-[88vh]'>
			<div className='upper-box p-5 min-h-[50vh]'>
				<div className='header flex flex-row justify-between items-center'>
					<span className='wemsc-logo text-3xl 4k:text-6xl mb-2 font-extrabold text-indigo-700'>
						W
					</span>
					<Burger className='icon hover:text-blue-600' />
				</div>
				<div className='features flex flex-col my-4'>
					<div className='text-xs 4k:text-lg mb-2 font-light text-primary hover:scale-y-110 hover:text-white transition-all duration-500'>
						FEATURES
					</div>
					<HoverIcon
						OutlinedIcon={HomeOutlined}
						FilledIcon={Home}
						descriptor='Home'
					/>
					<HoverIcon
						OutlinedIcon={DiscoverOutlined}
						FilledIcon={Discover}
						descriptor='Discover'
					/>
					<HoverIcon
						OutlinedIcon={CollectionsOutlined}
						FilledIcon={Collections}
						descriptor='Collections'
					/>
				</div>
				<div className='library mb-4 flex flex-col'>
					<div className='text-xs 4k:text-lg mb-2 font-light text-primary hover:scale-y-110 hover:text-white transition-all duration-500'>
						LIBRARY
					</div>
					<HoverIcon
						OutlinedIcon={DownloadOutlined}
						FilledIcon={Download}
						descriptor='Download'
					/>
					<HoverIcon
						OutlinedIcon={FavouritesOutlined}
						FilledIcon={Favourites}
						descriptor='Favourites'
					/>
					<HoverIcon
						OutlinedIcon={LocalFilesOutlined}
						FilledIcon={LocalFiles}
						descriptor='Local Files'
					/>
				</div>
			</div>
			<div className='bg-[url(_assets/coverSong.png)] w-full h-56 bg-contain  bg-center aspect-square'></div>
		</div>
	);
}
