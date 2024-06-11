'use client'
import PerksComponent from '@/app/stats/perks/PerksComponent'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const PerksPage: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return (
		<div>
			<PerksComponent char={char} setChar={setChar} />
		</div>
	)
}

export default PerksPage
