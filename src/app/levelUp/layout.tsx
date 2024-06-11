import LvlUpNav from '@/app/levelUp/lvlUpNav'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<LvlUpNav />
		</>
	)
}

export default Layout
