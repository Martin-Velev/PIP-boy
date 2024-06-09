import { BACKGROUNDS, Background } from '@/app/rules/backgrounds'
import { CharProps } from '@/app/types/props'
import React, { FC, useState } from 'react'

const BackgroundPicker: FC<CharProps> = ({ char, setChar }) => {
	const backgrounds = BACKGROUNDS
	const [selectedBackground, setSelectedBackground] = useState<Background>(BACKGROUNDS[0])

	const onBackgroundChange = (background: Background) => {
		// TODO: make this in to a map
		if (!background) return

		setSelectedBackground(background)
		setChar({ ...char, background })
	}

	return (
		<div id='background' className='w-full flex flex-row'>
			<div className='w-1/2'>
				<ul className='w-1/2' style={{ maxWidth: '80vh' }}>
					{backgrounds.map((background) => (
						<li
							key={background.name}
							className={`${
								char.background.name === background.name ? 'border-2' : ''
							} `}
							onClick={() => onBackgroundChange(background)}
						>
							{background.name}
						</li>
					))}
				</ul>
			</div>

			<div className='w-1/2 overflow-scroll' style={{ maxHeight: '80vh' }}>
				<h3>Description</h3>

				<div>
					<div>
						{selectedBackground.description.split('\n').map((line, i) => (
							<p key={`desc-${i}`}>{line}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BackgroundPicker
