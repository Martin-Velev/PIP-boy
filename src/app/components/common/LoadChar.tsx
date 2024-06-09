import React, { useState } from 'react'
import { validateChar } from '@/utils'
import uploadIcon from '../../../../public/icons/upload.svg'
import { Char } from '@/app/types/char'
import Image from 'next/image'

const LoadChar: React.FC<{ setChar: (char: Char) => void }> = ({ setChar }) => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null
		if (file) {
			// Read the contents of the file
			const reader = new FileReader()
			reader.onload = (event) => {
				const fileContent = event.target?.result as string
				try {
					const char = JSON.parse(fileContent)
					if (validateChar(char)) {
						setChar(char)
					} else {
						// TODO. error message
					}
				} catch (error) {
					console.error('Error parsing JSON file:', error)
				}
			}
			reader.readAsText(file)
		}
	}

	const handleFileUpload = () => {}

	return (
		<div>
			<div className='flex flex-row'>
				<Image style={{ filter: 'invert(1)' }} src={uploadIcon} alt='upload' />
				<input type='file' accept='.json' onChange={handleFileChange} />
			</div>
		</div>
	)
}

export default LoadChar
