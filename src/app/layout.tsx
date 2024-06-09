import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootNav from '@/app/components/nav/rootNav'
import { CharContext, CharProvider } from '@/app/providers/CharProvider'
import { useContext } from 'react'
import CharManager from '@/app/components/CharManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'PIP-Boy',
	description: 'VAULT-TEC™ approved! 👍',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/vault-tec.svg',
		},
	],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/vault-tec.svg' sizes='96x96' />
			</head>
			<body className={inter.className + 'h-full w-full'}>
				<div id='app-container' className='h-screen'>
					<CharProvider>
						{children}
						<RootNav />

						<CharManager />
					</CharProvider>
				</div>
			</body>
		</html>
	)
}
