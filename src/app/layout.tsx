import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootNav from '@/app/nav/rootNav'

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
				{children}
				<RootNav />
			</body>
		</html>
	)
}
