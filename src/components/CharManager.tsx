'use client'

import LoadChar from '@/components/LoadChar'
import SaveChar from '@/components/SaveChar'
import { CharContext } from '@/providers/CharProvider'
import React, { FC } from 'react'

const CharManager: FC = () => {
	const { char, setChar } = React.useContext(CharContext)
	if (!char) return null
	return (
		<div>
			<LoadChar setChar={setChar} />
			<SaveChar char={char} />
		</div>
	)
}

export default CharManager
