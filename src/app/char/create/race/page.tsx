'use client'
import { CharContext } from '@/app/providers/CharProvider'
import React from 'react'
import RacePicker from './RacePicker'

const RacePage: React.FC = () => {
	const { char, setChar } = React.useContext(CharContext)

	return (
		<>
			<RacePicker char={char} setChar={setChar} />
		</>
	)
}

export default RacePage
