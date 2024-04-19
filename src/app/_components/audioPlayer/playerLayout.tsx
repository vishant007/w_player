'use client';
import React, { useEffect } from 'react';
import AudioPlayerComponent from './audioPlayer';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOffRounded';
import MicIcon from '@mui/icons-material/MicRounded';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import DevicesIcon from '@mui/icons-material/DevicesRounded';
import SharingIcon from '@mui/icons-material/ShareRounded';
import FavouritesOutlined from '@mui/icons-material/FavoriteBorderRounded';
import AddBoxRounded from '@mui/icons-material/AddBoxRounded';
import Image from 'next/image';
import songImg from '../../../../public/_assets/img1.jpg';

const AudioPlayerLayout = ({ songUrl }: { songUrl: string }) => {
	const player: any = React.useRef(null);
	const [volume, setVolume] = React.useState(1);
	const [muted, setIsMuted] = React.useState(false);
	const [lastVolume, setLastVolume] = React.useState(1);

	const handleVolumeChange = (event: any, newValue: any) => {
		setVolume(newValue);
		if (player.current && player.current.audio.current) {
			player.current.audio.current.volume = newValue;
		}
	};

	const handleMicClick = () => {
		setIsMuted(!muted);
	};

	const handleVolumeClick = () => {
		if (volume === 0) {
			setVolume(lastVolume);
		} else {
			setLastVolume(volume);
			setVolume(0);
		}
	};

	return (
		<div className='flex flex-row justify-between items-center md:px-4 text-white w-full'>
			{/*left side component*/}
			<div className='flex flex-row gap-5 md:px-5 justify-between items-start'>
				<div className='md:hidden'>
					{/*show only on mobile*/}
					<Image
						src={songImg}
						alt='profile'
						width={50}
						height={50}
						className='aspect-square'
					/>
				</div>
				<div className='flex flex-col'>
					<div className='text-sm  font-bold'>Lights</div>
					<div className='text-xs '>Nucleya</div>
				</div>
				<div className='icon-box flex flex-row xs:max-sm:hidden'>
					<div className='group'>
						<FavouritesOutlined className='icon' />
					</div>
					<div className='group'>
						<AddBoxRounded className='icon' />
					</div>
				</div>
			</div>
			{/*center component*/}
			<div className='flex-1'>
				<AudioPlayerComponent songUrl={songUrl} />
			</div>
			{/*right side component*/}
			<div className='xs:max-sm:hidden flex flex-row justify-center items-center gap-3'>
				<div className='group' onClick={handleVolumeClick}>
					{volume === 0 ? (
						<VolumeOffIcon className='icon' />
					) : volume < 0.5 ? (
						<VolumeDownIcon className='icon' />
					) : (
						<VolumeUpIcon className='icon' />
					)}
				</div>

				<Slider
					min={0}
					max={1}
					step={0.01}
					value={volume}
					onChange={handleVolumeChange}
					aria-labelledby='continuous-slider'
					className='w-16'
					size='small'
				/>
				<div className='group' onClick={handleMicClick}>
					{muted ? (
						<MicOffRoundedIcon className='icon' />
					) : (
						<MicIcon className='icon' />
					)}
				</div>
				<div className='group'>
					<DevicesIcon className='icon' />
				</div>
				<div className='group'>
					<SharingIcon className='icon' />
				</div>
			</div>
		</div>
	);
};

export default AudioPlayerLayout;
