'use client'

import SpecialStatsComponent from '@/app/stats/special/StatsComponent'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SpecialStatsComponent char={char} setChar={setChar} />
}

export default Page
