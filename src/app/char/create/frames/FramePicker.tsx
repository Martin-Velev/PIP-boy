import { CharProps } from '@/app/common/props'
import { FRAMES, Frame } from '@/app/rules/frames'
import React, { FC } from 'react'

const FramePicker: FC<CharProps> = ({ char, setChar }) => {
	const handleFrameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const frame = event.target.value as Frame
		const newChar = { ...char, frame }
		setChar(newChar)
	}

	return (
		<div>
			<label htmlFor='frame'>Select Frame:</label>
			<select id='frame-picker' value={char.frame} onChange={handleFrameChange}>
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
