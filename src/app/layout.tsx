import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootNav from '@/app/components/nav/rootNav'
import { CharContext, CharProvider } from '@/app/providers/CharProvider'
import { useContext } from 'react'
import CharManager from '@/app/components/CharManager'
import Header from '@/app/components/common/Header'

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
						<Header />
						{children}
						<RootNav />

						<div className='absolute bottom-10 right-0'>
							<CharManager />
						</div>
					</CharProvider>
				</div>
			</body>
		</html>
	)
}
