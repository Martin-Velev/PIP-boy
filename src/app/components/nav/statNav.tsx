import Nav from '@/app/components/common/Nav'
import { NAV_HEIGHT } from '@/app/constants'
import React from 'react'

const StatNav: React.FC = () => {
	const routes = [
		{ path: '/stats/special', label: 'S.P.E.C.I.A.L' },
		{ path: '/stats/skills', label: 'Skills' },
		{ path: '/stats/perks', label: 'Perks' },
	]
	return <Nav routes={routes} offset={NAV_HEIGHT} />
}

export default StatNav
