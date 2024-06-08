'use client'
import TraitsComponent from '@/app/char/create/traits/TraitsComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <TraitsComponent char={char} setChar={setChar} />
}

export default SpecialPage
