
'use client'
import RacePicker from '@/app/components/char/RacePicker'
import { CharContext } from '@/app/providers/CharProvider'
import React, { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <RacePicker char={char} setChar={setChar} />
}

export default Page
