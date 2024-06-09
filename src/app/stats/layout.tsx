import StatNav from '@/components/nav/statNav'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<StatNav />
		</>
	)
}

export default Layout
