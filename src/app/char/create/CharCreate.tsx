'use client'
import { FC } from 'react'
import CharComponent from '../CharComponent'
import { CharProps } from '@/app/common/props'

const CharCreate: FC<CharProps> = ({ char, setChar }) => {
	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newChar = { ...char, name: e.target.value }
		setChar(newChar)
	}

	return (
		<div>
			<h1 className='w-full text-6xl flex justify-center'>Create a character</h1>

			<CharComponent char={char} setChar={setChar} />
		</div>
	)
}

export default CharCreate
