import { RACES, RACE_DESCRIPTION, RACE_TO_MOD, RACE_TO_TAG_SKILL, Race } from '@/app/rules/races'
import { CharProps } from '@/app/types/props'
import { Stat } from '@/app/types/stat'
import React, { FC } from 'react'

const RacePicker: FC<CharProps> = ({ char, setChar }) => {
	const handleRaceChange = (race: Race) => {
		// Clear old mods
		let statMods = char.statMods
		for (const stat in statMods) {
			statMods[stat as Stat].race = 0
		}
		if (race === 'human') {
			let availableStatPoints = char.availableStatPoints
			if (char.race !== 'human') {
				// if changing to human add 4 skill points
				availableStatPoints = char.availableStatPoints + 4
			}
			setChar({ ...char, race, availableStatPoints, availableTags: 3 })
			return
		}

		const relevantStatMods: Record<Stat, number> = RACE_TO_MOD[race]

		// new ntat mods
		for (let stat in relevantStatMods) {
			const mod = relevantStatMods[stat as Stat]
			if (!mod) continue
			statMods[stat as Stat].race = mod
		}

		// if previous race was human need to remove the extra points
		const availableStatPoints =
			char.race === 'human' ? char.availableStatPoints - 4 : char.availableStatPoints

		const tagCount = RACE_TO_TAG_SKILL[race]
		setChar({ ...char, race, availableTags: tagCount, statMods, availableStatPoints })
	}

	return (
		<div className='flex flex-row justify-between'>
			<div className='flex flex-col'>
				<label htmlFor='race'>Select Race:</label>

				<ul>
					{RACES.map((race) => (
						<li
							key={race}
							onClick={() => handleRaceChange(race)}
							className={`w-full ${char.race === race ? 'border-2' : ''}`}
						>
							{race}
						</li>
					))}
				</ul>
			</div>
			<div className='w-1/2'>
				{RACE_DESCRIPTION[char.race].split('\n').map((line, i) => (
					<p key={`desc-${i}`}>{line}</p>
				))}
			</div>
		</div>
	)
}

export default RacePicker
