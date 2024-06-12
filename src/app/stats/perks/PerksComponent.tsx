'use client'
import { levelSorter } from '@/rules/perks'
import { Perk } from '@/types/perk'
import { CharProps } from '@/types/props'
import { FC, useState, useEffect } from 'react'
import PERKS_JSON from '@data/perks.json'

const PerksComponent: FC<CharProps> = ({ char, setChar }) => {
	// const [perks, setPerks] = useState([])
	const perks = PERKS_JSON as Perk[]
	// const [selectedPerks, setSelectedPerks] = useState([] as Perk[])
	const [highlightedPerk, setHighlightedPerk] = useState(null as Perk | null)

	// Fetch perks from the server
	useEffect(() => {
		const fetchData = async () => {}
		fetchData()
	}, [])

	function togglePerk(perk: Perk) {
		const index = char.perks.indexOf(perk)
		const isSelected = index > -1

		const newPerks = [...char.perks]
		let perksLeft = char.availablePerks
		if (isSelected) {
			newPerks.splice(index, 1)
			perksLeft++
		} else {
			if (perksLeft <= 0) return
			newPerks.push(perk)
			perksLeft--
		}

		setChar({ ...char, perks: newPerks, availablePerks: perksLeft })
	}

	function highlightPerk(perk: Perk) {
		setHighlightedPerk(perk)
	}

	return (
		<div id='perks' className='flex flex-col max-h-screen'>
			<h2>Available Perks: {char.availablePerks}</h2>
			<div className='w-full flex flex-row'>
				<div className='w-1/2'>
					<ul className='overflow-scroll' style={{ maxHeight: '70vh' }}>
						{perks.sort(levelSorter).map((perk: Perk) => (
							<li
								key={perk.name}
								className='hover:border p-1 flex flex-row'
								onClick={() => highlightPerk(perk)}
							>
								<input
									disabled={perk.level > char.level}
									style={{ all: 'revert' }}
									type='checkbox'
									checked={char.perks.indexOf(perk) > -1}
									onChange={() => togglePerk(perk)}
								/>
								<div className='w-full flex flex-row'>
									<div>{perk.name}</div>
									<div className='mx-2'>|</div>
									<div>Level: {perk.level}</div>
									<div className='mx-2'>|</div>
									<div>Ranks: {perk.ranks}</div>
									<div className='mx-2'>|</div>
									<div className='mr-0'>{perk.requrments}</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className='w-1/2'>
					<h3>Description</h3>

					<div>
						{highlightedPerk && (
							<>
								<p>{highlightedPerk.description}</p>
								<p>{highlightedPerk.requrments}</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PerksComponent
