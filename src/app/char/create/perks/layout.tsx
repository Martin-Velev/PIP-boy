'use client'
import { CharProvider } from '@/app/providers/CharProvider'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<CharProvider>
			{children}
		</CharProvider>
	)
}

export default Layout
