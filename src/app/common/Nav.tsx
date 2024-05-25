import Link from 'next/link'
import React from 'react'

const Nav: React.FC = () => {
	return (
		<nav>
			<ul className='text-4xl mb-12 flex flex-row w-full justify-center'>
				<li className='mx-32'>
					<Link href='/char'>Char</Link>
				</li>
				{/* <li className='mx-32'>
					<Link href='/char/stats'>Stats</Link>
				</li>
				<li className='mx-32'>
					<Link href='/char/traits'>Traits</Link>
				</li> */}
			</ul>
		</nav>
	)
}

export default Nav
