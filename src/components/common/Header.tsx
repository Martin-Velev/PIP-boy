'use client'

import { CharContext } from '@/providers/CharProvider'
import React, { FC } from 'react'

const Header: FC = () => {
	const { char, setChar } = React.useContext(CharContext)
	return (
		<div className='flex w-full justify-center flex-row w-full text-4xl text-center'>
			<h1>Name:</h1>

			<input
				type='text'
				value={char.name}
				onChange={(e) => setChar({ ...char, name: e.target.value })}
			/>
		</div>
	)
}

export default Header
