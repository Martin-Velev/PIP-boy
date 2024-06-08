'use client'
import PerksComponent from '@/app/char/create/perks/PerksComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { useContext } from 'react'

const SpecialPage: React.FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <PerksComponent char={char} setChar={setChar} />
}

export default SpecialPage
