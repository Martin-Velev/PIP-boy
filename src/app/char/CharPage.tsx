'use client'
import Link from 'next/link'
import { FC, useContext } from 'react'
import LoadChar from '../common/LoadChar'
import { CharContext } from '../providers/CharProvider'

const CharPage: FC = () => {
	const { char, setChar } = useContext(CharContext)

	return (
		<div>
			<h1 className='w-full text-6xl flex justify-center'>Character Page</h1>

			<div className='my-12  w-full flex flex-col justify-between align-middle place-items-center text-center text-6xl'>
				<Link href='/char/create/stats'>Create a character</Link>

				<LoadChar setChar={setChar} />
			</div>
		</div>
	)
}

export default CharPage
