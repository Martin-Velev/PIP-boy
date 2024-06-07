import { CharProps } from '@/app/common/props'
import { RACES, Race, adjustForRace } from '@/app/rules/races'
import React, { FC, useState } from 'react'

const RacePicker: FC<CharProps> = ({ char, setChar }) => {
	const handleRaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const race = event.target.value as Race
		const newChar = adjustForRace({ ...char, race })
		setChar({ ...newChar, race })
	}

	return (
		<div>
			<label htmlFor='race'>Select Race:</label>
			<select id='race-picker' value={char.race} onChange={handleRaceChange}>
				{RACES.map((race) => (
					<option key={race} value={race}>
						{race}
					</option>
				))}
			</select>
		</div>
	)
}

export default RacePicker
