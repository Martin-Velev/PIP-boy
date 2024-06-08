import React, { FC, ReactNode } from 'react'
import StatNav from '@/app/nav/statNav'
import GeneralNav from '@/app/nav/generalNav'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<GeneralNav />
		</>
	)
}

export default Layout
