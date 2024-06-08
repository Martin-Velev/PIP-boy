import { CharProps } from '@/app/common/props'
import { BACKGROUNDS, Background } from '@/app/rules/backgrounds'
import React, { FC, useEffect, useState } from 'react'

const BackgroundPicker: FC<CharProps> = ({ char, setChar }) => {
	const backgrounds = BACKGROUNDS
	const [selectedBackground, setSelectedBackground] = useState<Background>(BACKGROUNDS[0])

	const onBackgroundChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		// TODO: make this in to a map
		const background = backgrounds.find((b) => b.name === event.target.value)
		if (!background) return
		console.log('skill mods', background.skillMods)

		setSelectedBackground(background)
		setChar({ ...char, background })
	}

	return (
		<div id='background' className='w-full flex flex-row'>
			<div className='w-1/2'>
				<select
					value={selectedBackground.name}
					onChange={onBackgroundChange}
					className='w-full'
				>
					<option value=''>Select a background</option>
					{backgrounds.map((background) => (
						<option key={background.name} value={background.name}>
							{background.name}
						</option>
					))}
				</select>
			</div>

			<div className='w-1/2 overflow-scroll' style={{ maxHeight: '80vh' }}>
				<h3>Description</h3>

				<div>
					<>
						<div>
							{selectedBackground.description.split('\n').map((line, i) => (
								<p key={`desc-${i}`}>{line}</p>
							))}
						</div>
					</>
				</div>
			</div>
		</div>
	)
}

export default BackgroundPicker
