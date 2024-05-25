'use client'
import React from 'react'
import PerksComponent from './PerksComponent'
import { CharContext } from '@/app/providers/CharProvider'
import Link from 'next/link'

const TraitsPage: React.FC = () => {
	const { char, setChar } = React.useContext(CharContext)

	return (
		<div>
			<h1>Perks</h1>
			<PerksComponent char={char} setChar={setChar} />

			<div className='w-full text-center text-4xl'>
				<Link href='/char/create/overview'>Character Overview</Link>
			</div>
		</div>
	)
}

export default TraitsPage
