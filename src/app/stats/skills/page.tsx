'use client'
import SkillsComponent from '@/app/char/create/stats/SkillsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SkillsComponent char={char} setChar={setChar} />
}

export default SpecialPage
