import Nav from '@/app/common/Nav'
import { NAV_HEIGHT } from '@/app/constants'
import Link from 'next/link'

const RootNav = () => {
	const routes = [
		{ path: '/stats', label: 'STATS' },
		{ path: '/items', label: 'ITEMS' },
		{ path: '/data', label: 'DATA' },
	]
	return <Nav routes={routes} />
}

export default RootNav
