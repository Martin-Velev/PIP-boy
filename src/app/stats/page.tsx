'use client'
import { redirect } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
	redirect('/stats/special')
}

export default Page
