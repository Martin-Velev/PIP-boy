'use client'
import SkillsComponent from '@/app/components/SkillsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <SkillsComponent char={char} setChar={setChar} />
}

export default Page
