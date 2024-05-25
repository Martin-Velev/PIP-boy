'use client'
import React, { useEffect, useState } from 'react'
import TraitComponent from './Trait'
import { Trait } from '@/app/types/traits'
import { CharProps } from '@/app/common/props'

const TraitsComponent: React.FC<CharProps> = ({ char, setChar }) => {
	const [traits, setTraits] = useState([])
	// const [selectedTraits, setSelectedTraits] = useState([] as Trait[])

	// Fetch the traits from the server
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/traits')
				const data = await response.json()

				setTraits(data.traits)
				console.log('traits:', data.traits)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	function isTraitSelected(trait: Trait) {
		if (!char.traits) return false
		const charTraits = char.traits.map((trait) => trait.name)
		return charTraits.includes(trait.name)
	}

	function toggleTraitSelection(trait: Trait) {
		const index = char.traits.findIndex((t) => t.name === trait.name)
		const isSelected = index > -1

		const newTraits = [...char.traits]

		// check if there are enough remainging traits
		if (!isSelected && newTraits.length >= 2) {
			return
		}
		let availableTraits = char.availableTraits

		if (isSelected) {
			newTraits.splice(index, 1)
			availableTraits += 1
		} else {
			newTraits.push(trait)
			availableTraits -= 1
		}

		setChar({ ...char, traits: newTraits, availableTraits })
	}

	return (
		<>
			<div className='w-full text-center text-6xl'>
				<h1>Traits</h1>
				<h4 className='text-4xl'>(select 2)</h4>
			</div>

			<ul>
				{traits.map((trait: Trait) => (
					<li key={trait.name} className='flex flex-row my-8'>
						<input
							style={{ all: 'revert' }}
							type='checkbox'
							id={trait.name}
							checked={isTraitSelected(trait)}
							onChange={() => toggleTraitSelection(trait)}
						/>

						<TraitComponent trait={trait} />
					</li>
				))}
			</ul>
		</>
	)
}

export default TraitsComponent
