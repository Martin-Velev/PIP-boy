'use client'

import PerksComponent from '@/app/stats/perks/PerksComponent'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <PerksComponent char={char} setChar={setChar} />
}

export default Page
