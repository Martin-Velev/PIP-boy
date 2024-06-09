import GeneralNav from '@/app/general/generalNav'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			{children}
			<GeneralNav />
		</>
	)
}

export default Layout
