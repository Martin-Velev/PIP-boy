import { Trait } from '@/app/types/trait'
import React from 'react'

const TraitComponent: React.FC<{ trait: Trait }> = ({ trait }) => {
	const { title, description } = trait
	return (
		<div className=''>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
}

export default TraitComponent
