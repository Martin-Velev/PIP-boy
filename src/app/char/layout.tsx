'use client'

import { CharProvider } from '../providers/CharProvider'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<CharProvider>
				{children}
			</CharProvider>
		</>
	)
}
