
import { NAV_HEIGHT } from '@/app/constants'
import Nav from '@/components/Nav'
import { FC } from 'react'

const LvlUpNav: FC = () => {
	const routes = [
		{ path: '/levelUp/perks', label: 'Perks' },
	]
	return <Nav routes={routes} offset={NAV_HEIGHT} />
}

export default LvlUpNav
