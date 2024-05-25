'use client'
import { FC, useContext } from 'react'
import CharCreate from './CharCreate'
import { CharContext } from '@/app/providers/CharProvider'

const CharCreatePage: FC = () => {
	const { char, setChar } = useContext(CharContext)

	return (
		<>
			<CharCreate char={char} setChar={setChar} />
		</>
	)
}
export default CharCreatePage
