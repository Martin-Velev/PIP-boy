import { redirect } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
	redirect('/levelUp/confirm')
}

export default Page
