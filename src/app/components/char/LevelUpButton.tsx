import { levelUp } from '@/app/rules/levelUp'
import { CharProps } from '@/app/types/props'
import React, { FC } from 'react'

const LevelUpButton: FC<CharProps> = ({ char, setChar }) => {
	const [lvlUpInitiated, setLvlUpInitiated] = React.useState(false)
	const [hpgain, setHpgain] = React.useState(0)

	const handleLevelUp = () => {
		const newChar = levelUp(char, hpgain)

		console.log('leveld up:', newChar)

		setLvlUpInitiated(false)
		setChar(newChar)
	}

	return (
		<div>
			<button
				onClick={() => {
					setLvlUpInitiated(true)
				}}
			>
				Level Up
			</button>
			{lvlUpInitiated && (
				<div className='flex flex-col text-4xl'>
					<input
						type='number'
						onChange={(e) => {
							setHpgain(parseInt(e.target.value))
						}}
					/>
					<button onClick={handleLevelUp}>Confirm</button>
					<button
						onClick={() => {
							setLvlUpInitiated(false)
						}}
					>
						Cancel
					</button>
				</div>
			)}
		</div>
	)
}

export default LevelUpButton
