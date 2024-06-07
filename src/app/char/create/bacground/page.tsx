

'use client'
import { CharContext } from '@/app/providers/CharProvider'
import React from 'react'
import BackgroundPicker from './BackgroundPicker'

const RacePage: React.FC = () => {
	const { char, setChar } = React.useContext(CharContext)

	return (
		<>
			<BackgroundPicker char={char} setChar={setChar} />
		</>
	)
}

export default RacePage
