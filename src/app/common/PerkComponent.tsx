import React from 'react'
import { Perk } from '../types/perk'

interface PerkComponentProps {
	perk: Perk
	isSelected: boolean
	onSelect: (perk: Perk) => void
}

const PerkComponent: React.FC<PerkComponentProps> = ({ perk, isSelected, onSelect }) => {
	return (
		<div className='flex flex-row w-full' onClick={e => onSelect(perk)}>
			<div className='w-1/12'>{isSelected ? '□' : ''}</div>
			<h3>{perk.name}</h3>
			<p>{perk.description}</p>
			{/* Render other perk details */}
		</div>
	)
}

export default PerkComponent
