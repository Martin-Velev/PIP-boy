import { Trait } from '@/app/types/traits'
import React from 'react'

const TraitComponent: React.FC<{ trait: Trait }> = ({ trait }) => {
	const { name, description } = trait
	return (
		<div className=''>
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	)
}

export default TraitComponent
