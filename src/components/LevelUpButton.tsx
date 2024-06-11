import CharManager from '@/components/CharManager'
import { CharContext } from '@/providers/CharProvider'
import Link from 'next/link'
import React, { FC, useContext } from 'react'

const LevelUpButton: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return (
		<>
			<Link href='/levelUp'>Level Up</Link>
			<div>Current level: {char.level}</div>
		</>
	)
}

export default LevelUpButton
