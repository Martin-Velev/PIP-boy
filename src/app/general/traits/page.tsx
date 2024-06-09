'use client'

import TraitsComponent from '@/app/general/traits/TraitsComponent'
import { CharContext } from '@/providers/CharProvider'
import { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <TraitsComponent char={char} setChar={setChar} />
}

export default SpecialPage
