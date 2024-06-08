import { redirect } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
	redirect('/general/race')
}

export default Page
