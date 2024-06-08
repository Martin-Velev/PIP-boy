'use client'
import PerksComponent from '@/app/components/PerksComponent'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <PerksComponent char={char} setChar={setChar} />
}

export default Page
