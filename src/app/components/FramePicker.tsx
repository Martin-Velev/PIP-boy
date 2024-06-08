'use client'
import { FRAMES, Frame, STAT_PER_FRAME } from '@/app/rules/frames'
import { CharProps } from '@/app/types/props'
import { Stat } from '@/app/types/stat'
import React, { FC } from 'react'

const FramePicker: FC<CharProps> = ({ char, setChar }) => {
	console.log('frame char', char)
	const handleFrameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const frame = event.target.value as Frame
		const newChar = { ...char, frame }
		for (const stat in newChar.statMods) {
			newChar.statMods[stat as Stat].frame = 0
		}
		const statModsMap: { [key: string]: number } = STAT_PER_FRAME[frame] // Add index signature
		for (let relevantStat in statModsMap) {
			const newMod = statModsMap[relevantStat as Stat]
			newChar.statMods[relevantStat as Stat].frame = newMod
		}

		setChar(newChar)
	}

	return (
		<div>
			<label htmlFor='frame'>Select Frame:</label>
			<select
				id='frame-picker'
				value={char.frame}
				onChange={handleFrameChange}
			>
				{FRAMES.map((frame) => (
					<option key={frame} value={frame}>
						{frame}
					</option>
				))}
			</select>
		</div>
	)
}

export default FramePicker
