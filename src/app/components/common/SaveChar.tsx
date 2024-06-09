import { Char } from '@/app/types/char'
import { FC } from 'react'
import downloadIcon from '../../../../public/icons/download.svg'
import Image from 'next/image'

const SaveChar: FC<{ char: Char }> = ({ char }) => {
	const charJSON = JSON.stringify(char)
	let downloadUrl = 'data:text/json;charset=utf-8,' + encodeURIComponent(charJSON)

	return (
		<div>
			<div className='flex flex-row '>
				<Image style={{ filter: 'invert(1)' }} src={downloadIcon} alt='upload' />
				<a href={downloadUrl} download='character.json'>
					Save Char to JSON
				</a>
			</div>
		</div>
	)
}

export default SaveChar
