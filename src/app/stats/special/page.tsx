'use client'
import SpecialStatsComponent from '@/app/components/char/StatsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SpecialStatsComponent char={char} setChar={setChar} />
}

export default Page
