
'use client'

import RacePicker from '@/app/general/race/RacePicker'
import { CharContext } from '@/providers/CharProvider'
import { FC, useContext } from 'react'

const Page: FC = () => {
	const { char, setChar } = useContext(CharContext)
	return <RacePicker char={char} setChar={setChar} />
}

export default Page
