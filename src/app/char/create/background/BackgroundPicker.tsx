import { CharProps } from '@/app/common/props'
import { Background } from '@/app/rules/backgrounds'
import React, { FC, useEffect, useState } from 'react'

const BackgroundPicker: FC<CharProps> = () => {
	const [backgrounds, setBackgrounds] = useState<Background[]>([])
	const [selectedBackground, setSelectedBackground] = useState<Background>()

	useEffect(() => {
		const fetchBackgrounds = async () => {
			try {
				const response = await fetch('/api/backgrounds')
				const data = await response.json()
				const { backgrounds } = data

				console.log('backgrounds', backgrounds)
				setBackgrounds(backgrounds)
				setSelectedBackground(backgrounds[0])
			} catch (error) {
				console.error('Error fetching backgrounds:', error)
			}
		}

		fetchBackgrounds()
	}, [])

	const onBackgroundChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const background = backgrounds.find((b) => b.name === event.target.value)
		if (!background) return
		console.log('skill mods', background.skillMods)

        
	}

	if (!backgrounds || !selectedBackground) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className='w-full flex flex-row'>
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

				<div className='w-1/2'>
					<h3>Description</h3>

					<div>
						<>
							<p>
								{selectedBackground.description.split('\n').map((line) => (
									<>
										{line}
										<br />
									</>
								))}
							</p>
						</>
					</div>
				</div>
			</div>
		</>
	)
}

export default BackgroundPicker
