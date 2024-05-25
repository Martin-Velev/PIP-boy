'use client'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'
import CharComponent from '../../CharComponent'
import SaveChar from '@/app/common/SaveChar'

const Page: React.FC = () => {
	const { char, setChar } = useContext(CharContext)

    console.log('char', char)

	return (
		<div>
			<CharComponent char={char} setChar={setChar} />

			<div className='w-full text-8xl m-12 text-center'>
				<SaveChar char={char} />
			</div>
		</div>
	)
}

export default Page
