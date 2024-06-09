'use client'
import LoadChar from '@/app/components/common/LoadChar'
import SaveChar from '@/app/components/common/SaveChar'
import { CharContext } from '@/app/providers/CharProvider'
import React from 'react'

const CharManager: React.FC = () => {
	const { char, setChar } = React.useContext(CharContext)
	if (!char) return null
	return (
		<div>
			Current character: {char.name ? char.name : 'blank'}
			<LoadChar setChar={setChar} />
			<SaveChar char={char} />
		</div>
	)
}

export default CharManager
