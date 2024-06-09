'use client'

import BackgroundPicker from '@/app/general/background/BackgroundPicker'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <BackgroundPicker char={char} setChar={setChar} />
}

export default Page
