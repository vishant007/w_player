import AudioPlayerLayout from './playerLayout';

export default function Player() {
	return (
		<div className='flex items-center justify-between p-3 bg-bgp  text-white'>
			<AudioPlayerLayout songUrl='/_assets/nucleya.mp3' />
		</div>
	);
}
