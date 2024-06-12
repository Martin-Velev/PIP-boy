'use client'
import { CharContext } from '@/providers/CharProvider'
import { levelUp } from '@/rules/levelUp'
import Link from 'next/link'
import React, { FC, useContext } from 'react'

const LevelUpButton: FC = () => {
	const { char, setChar } = useContext(CharContext)

	function handleLvlUp() {
		setChar(levelUp(char))
	}

	return (
		<>
			<Link onClick={handleLvlUp} href='/levelUp'>
				Level Up
			</Link>
			<div>Current level: {char.level}</div>
		</>
	)
}

export default LevelUpButton
