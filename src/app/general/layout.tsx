import React, { FC, ReactNode } from 'react'
import StatNav from '@/app/components/nav/statNav'
import GeneralNav from '@/app/components/nav/generalNav'
import { CharProvider } from '@/app/providers/CharProvider'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<GeneralNav />
		</>
	)
}

export default Layout
