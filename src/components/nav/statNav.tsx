import { NAV_HEIGHT } from '@/app/constants'
import Nav from '@/components/nav/Nav'
import { FC } from 'react'

const StatNav: FC = () => {
	const routes = [
		{ path: '/stats/special', label: 'S.P.E.C.I.A.L' },
		{ path: '/stats/skills', label: 'Skills' },
		{ path: '/stats/perks', label: 'Perks' },
	]
	return <Nav routes={routes} offset={NAV_HEIGHT} />
}

export default StatNav
