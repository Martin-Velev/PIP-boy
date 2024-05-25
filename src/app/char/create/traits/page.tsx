'use client'
import { NextPage } from 'next'
import TraitsComponent from './TraitsComponent'
import Link from 'next/link'
import { CharContext } from '@/app/providers/CharProvider'
import { useContext } from 'react'

const Page: NextPage = () => {
	const { char, setChar } = useContext(CharContext)
	return (
		<>
			<TraitsComponent char={char} setChar={setChar} />

			<div className='w-full text-center text-4xl'>
				<Link href='/char/create/perks'>Perks</Link>
			</div>
		</>
	)
}

export default Page
