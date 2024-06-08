'use client'
import SpecialStatsComponent from '@/app/char/create/stats/StatsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return (
		<div>
			<SpecialStatsComponent char={char} setChar={setChar} />
		</div>
	)
}

export default SpecialPage
