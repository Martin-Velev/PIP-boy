import { redirect } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
	redirect('/levelUp/perks')
}

export default Page
