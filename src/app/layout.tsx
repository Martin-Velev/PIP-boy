import RootNav from '@/app/rootNav'
import { CharProvider } from '@/providers/CharProvider'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CharManager from '@/components/CharManager'
import Link from 'next/link'
import LevelUpButton from '@/components/LevelUpButton'
import HPTracker from '@/components/HPTracker'

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
				<div id='app-container' className='h-screen pt-20'>
					<CharProvider>
						<div className='absolute top-0 right-0 text-2xl flex flex-col'>
							<HPTracker />
						</div>
						<div className='absolute top-0 text-2xl flex flex-col'>
							<Header />
						</div>
						{children}
						<RootNav />

						<div className='absolute bottom-10 left-0'>
							<CharManager />
						</div>

						<div className='absolute bottom-10 right-0 text-2xl flex flex-col'>
							<LevelUpButton />
						</div>
					</CharProvider>
				</div>
			</body>
		</html>
	)
}
