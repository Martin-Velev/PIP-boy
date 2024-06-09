import { Trait } from '@/types/traits'
import { FC } from 'react'

const TraitComponent: FC<{ trait: Trait }> = ({ trait }) => {
	const { name, description } = trait
	return (
		<div className=''>
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	)
}

export default TraitComponent
