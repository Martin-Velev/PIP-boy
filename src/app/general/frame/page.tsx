'use client'

import FramePicker from '@/app/general/frame/FramePicker'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <FramePicker char={char} setChar={setChar} />
}

export default Page
