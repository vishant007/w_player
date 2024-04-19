'use client';
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
				{descriptor && <span className='icon-descriptor'>{descriptor}</span>}
			</div>
		);
	}
);

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleCollapse = useCallback(() => {
		setIsCollapsed((prev) => !prev);
	}, []);

	return (
		<div
			className={`hidden md:flex ${
				isCollapsed ? 'w-[5vw]' : 'w-[18vw]'
			} bg-bgp flex-col justify-between min-h-[88vh] transition-all duration-500 ease-in-out  `}
		>
			<div
				className={`upper-box p-5 ${
					isCollapsed
						? 'min-h-[100vh]'
						: 'min-h-[50vh] transition-all duration-500 ease-in-out'
				}`}
			>
				<div className='header flex flex-row justify-between items-center'>
					<span
						className={`wemsc-logo text-3xl 4k:text-6xl mb-2 font-extrabold text-white-700 ${
							isCollapsed ? 'hidden' : ''
						}`}
					>
						W
					</span>
					<Burger
						className='icon hover:text-blue-600  '
						onClick={toggleCollapse}
					/>
				</div>
				<div className={`features flex flex-col my-4`}>
					<HoverIcon
						OutlinedIcon={HomeOutlined}
						FilledIcon={Home}
						descriptor={!isCollapsed ? 'Home' : ''}
					/>
					<HoverIcon
						OutlinedIcon={DiscoverOutlined}
						FilledIcon={Discover}
						descriptor={!isCollapsed ? 'Discover' : ''}
					/>
					<HoverIcon
						OutlinedIcon={CollectionsOutlined}
						FilledIcon={Collections}
						descriptor={!isCollapsed ? 'Collections' : ''}
					/>
				</div>
				<div className={`library flex flex-col mb-4`}>
					<HoverIcon
						OutlinedIcon={DownloadOutlined}
						FilledIcon={Download}
						descriptor={!isCollapsed ? 'Download' : ''}
					/>
					<HoverIcon
						OutlinedIcon={FavouritesOutlined}
						FilledIcon={Favourites}
						descriptor={!isCollapsed ? 'Favourites' : ''}
					/>
					<HoverIcon
						OutlinedIcon={LocalFilesOutlined}
						FilledIcon={LocalFiles}
						descriptor={!isCollapsed ? 'Local Files' : ''}
					/>
				</div>
			</div>
			<div className='lower box max-h-[20vh]'>
				{!isCollapsed && (
					<img
						src={'/_assets/img1.jpg'}
						alt='Image Description'
						className='w-full h-56 bg-contain bg-center aspect-square'
					/>
				)}
			</div>
		</div>
	);
}
