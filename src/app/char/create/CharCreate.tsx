'use client'
import { DEFAULT_CHAR } from '@/app/constants'
import { Char } from '@/app/types/char'
import { Stats } from 'fs'
import { Dispatch, FC } from 'react'
import StatsComponent from './stats/StatsComponent'
import CharComponent from '../CharComponent'
import { CharProps } from '@/app/common/props'
import SaveChar from '@/app/common/SaveChar'
import LoadChar from '@/app/common/LoadChar'

const CharCreate: FC<CharProps> = ({ char, setChar }) => {
	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newChar = { ...char, name: e.target.value }
		setChar(newChar)
	}

	return (
		<div>
			<h1 className='w-full text-6xl flex justify-center'>Create a character</h1>

			<label htmlFor='name'>Name:</label>
			<input type='text' id='name' value={char.name} onChange={handleNameChange} />

			<CharComponent char={char} setChar={setChar} />


		</div>
	)
}

export default CharCreate
