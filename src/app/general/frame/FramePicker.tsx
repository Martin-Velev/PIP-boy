'use client'

import { Frame, STAT_PER_FRAME, FRAMES, FRAME_DESC_MAP } from '@/rules/frames'
import { CharProps } from '@/types/props'
import { Stat } from '@/types/stat'
import { FC } from 'react'

const FramePicker: FC<CharProps> = ({ char, setChar }) => {
	const handleFrameChange = (frame: Frame) => {
		let newChar = { ...char, frame }
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
		<div className='flex flex-row justify-between'>
			<div className='flex flex-col'>
				<label>Select Frame:</label>
				<ul className='w-1/2' style={{ maxWidth: '80vh' }}>
					{FRAMES.map((frame) => (
						<li
							className='flex flex-row'
							onClick={() => handleFrameChange(frame)}
							key={frame}
						>
							<label
								className={`${char.frame === frame ? 'border-2' : ''} `}
								htmlFor={frame}
							>
								{frame}
							</label>

							{/* <p>
							{FRAME_DESC_MAP[frame]}
						</p> */}
						</li>
					))}
				</ul>
			</div>
			<p className='w-1/2'>{FRAME_DESC_MAP[char.frame]}</p>
		</div>
	)
}

export default FramePicker
