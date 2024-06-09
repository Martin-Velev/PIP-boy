'use client'

import SkillsComponent from '@/app/stats/skills/SkillsComponent'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SkillsComponent char={char} setChar={setChar} />
}

export default Page
