import React, { useEffect, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayArrow from '@mui/icons-material/PlayArrowRounded';
import { PauseCircleFilled } from '@mui/icons-material';
import SkipNextRounded from '@mui/icons-material/SkipNextRounded';
import { SkipPreviousRounded } from '@mui/icons-material';
import ShuffleOutlined from '@mui/icons-material/ShuffleOutlined';
import { Loop } from '@mui/icons-material';

const useDynamicFontSize = () => {
	const [fontSize, setFontSize] = useState('32px');

	useEffect(() => {
		const updateFontSize = () => {
			const newSize = window.innerWidth > 2000 ? '48px' : '32px';
			setFontSize(newSize);
		};

		// Update font size on mount and window resize
		updateFontSize();
		window.addEventListener('resize', updateFontSize);

		// Cleanup listener
		return () => window.removeEventListener('resize', updateFontSize);
	}, []);

	return fontSize;
};

const AudioPlayerComponent = ({ songUrl }: { songUrl: string }) => {
	const fontSize = useDynamicFontSize();
	const player: any = React.useRef(null);

	const setVolume = (value: any) => {
		if (player.current && player.current.audio.current) {
			player.current.audio.current.volume = value;
		}
	};

	return (
		<div className='min-w-[40vw] md:px-[15vw] min-h-[10vh]'>
			<AudioPlayer
				style={{ backgroundColor: '#101011' }}
				ref={player}
				autoPlay={false}
				src={songUrl}
				onPlay={(e) => console.log('onPlay')}
				showSkipControls={true}
				showJumpControls={false}
				customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
				customControlsSection={[
					RHAP_UI.ADDITIONAL_CONTROLS,
					<ShuffleOutlined className='xs:max-sm:hidden' key='shuffle' />,
					RHAP_UI.MAIN_CONTROLS,
					<Loop className='xs:max-sm:hidden' key='loop' />,
					RHAP_UI.VOLUME_CONTROLS,
				]}
				customVolumeControls={[]}
				customAdditionalControls={[]}
				layout='stacked-reverse'
				customIcons={{
					//put color as white in sx
					play: <PlayArrow sx={{ color: 'white', fontSize: '32px' }} />,
					pause: (
						<PauseCircleFilled sx={{ color: 'white', fontSize: '32px' }} />
					),
					next: <SkipNextRounded sx={{ color: 'white', fontSize: '32px' }} />,
					previous: (
						<SkipPreviousRounded sx={{ color: 'white', fontSize: '32px' }} />
					),
				}}
			/>
		</div>
	);
};

export default AudioPlayerComponent;
