import React, { FC } from 'react'
import { Char } from '../types/char'

const SaveChar: FC<{ char: Char }> = ({ char }) => {

	const charJSON = JSON.stringify(char)
	let downloadUrl = "data:text/json;charset=utf-8," + encodeURIComponent(charJSON);

	return (
		<div>
			<a href={downloadUrl} download='character.json'>Save Char to JSON</a>
		</div>
	)
}

export default SaveChar
