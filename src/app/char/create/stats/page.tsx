'use client'
import { NextPage } from 'next'
import CharComponent from '../../CharComponent'
import { CharContext, CharProvider } from '@/app/providers/CharProvider'
import SpecialStatsComponent from './StatsComponent'
import SkillsComponent from './SkillsComponent'
import { useContext } from 'react'
import Link from 'next/link'

const Page: NextPage = () => {
	const { char, setChar } = useContext(CharContext)
	return (
		<>
			<div className='flex flex-row w-full'>
				<div className='w-1/2'>
					<SpecialStatsComponent char={char} setChar={setChar} />
				</div>
				<div className='w-1/2'>
					<SkillsComponent char={char} setChar={setChar} />
				</div>
			</div>

			<div className='w-full text-center text-4xl'>
				<Link href='/char/create/traits' >
					Traits
				</Link>
			</div>
		</>
	)
}

export default Page
