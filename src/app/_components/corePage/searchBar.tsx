import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import InputBase from '@mui/material/InputBase';
import { InputAdornment } from '@mui/material';

const SearchBar: React.FC = () => {
	return (
		<div className='flex items-center justify-between py-8 '>
			<div className='items-center hidden md:flex space-x-6'>
				<div className='group'>
					<ArrowBackIosNewIcon className='text-white cursor-pointer icon' />
				</div>
				<div className='group'>
					<ArrowForwardIosOutlinedIcon className='text-white cursor-pointer icon' />
				</div>
			</div>
			<div className='flex flex-1  md:mx-4 max-w-[80vw] md:max-w-[50vw] items-center justify-center'>
				<InputBase
					startAdornment={
						<InputAdornment position='start'>
							<SearchIcon className='text-secondary text-2xl 4k:text-4xl' />
						</InputAdornment>
					}
					className='flex-grow rounded-full text-sm 4k:text-xl bg-white text-primary px-4 py-2'
					placeholder='Search for artists, songs, or albums'
					inputProps={{ 'aria-label': 'search', className: 'my-auto' }}
				/>
			</div>
			<div className='group'>
				<MoreHorizOutlinedIcon className='icon' />
			</div>
		</div>
	);
};

export default SearchBar;
