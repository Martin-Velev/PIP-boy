'use client'
import { CharContext } from '@/providers/CharProvider'
import React, { ChangeEvent, FC, useContext } from 'react'

const HPTracker: FC = () => {
	const { char, setChar } = useContext(CharContext)

	const handleMaxHPChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newMaxHP = parseInt(event.target.value, 10)
		if (newMaxHP < char.hp) return
		setChar({ ...char, maxHP: newMaxHP })
	}

	const handleCurrentHPChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newCurrentHP = parseInt(event.target.value, 10)
		if (newCurrentHP > char.maxHP || newCurrentHP < 0) return
		setChar({ ...char, hp: newCurrentHP })
	}

	return (
		<div className='text-right'>
			<label>
				Max HP:
				<input
					className='ml-4 w-16'
					type='number'
					value={char.maxHP}
					onChange={handleMaxHPChange}
				/>
			</label>
			<br />
			<label>
				Current HP:
				<input
					className='ml-4 w-16'
					type='number'
					value={char.hp}
					onChange={handleCurrentHPChange}
				/>
			</label>
		</div>
	)
}

export default HPTracker
