import React, { FC, ReactNode } from 'react'
import StatNav from '@/app/components/nav/statNav'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<StatNav />
		</>
	)
}

export default Layout
