'use client'
import { CharContext } from '@/providers/CharProvider'
import { levelUp } from '@/rules/levelUp'
import Link from 'next/link'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)

	function onLvlUp() {
		setChar(levelUp(char))
	}
	return (
		<div className='text-center w-full flex flex-col'>
			<h1 className='text-6xl'>Are you sure you want to level up?</h1>
			<Link className='text-4xl' onClick={onLvlUp} href='/levelUp/perks'>
				Yes
			</Link>
			<Link className='text-4xl' href='/'>
				No
			</Link>
		</div>
	)
}

export default Page
