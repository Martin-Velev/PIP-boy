'use client'
import { hasRequirments, levelSorter } from '@/rules/perks'
import { Perk } from '@/types/perk'
import { CharProps } from '@/types/props'
import { FC, useState, useEffect } from 'react'
import PERKS_JSON from '@data/perks.json'
import PerkComponent from '@/app/stats/perks/PerkComponent'

const PerksComponent: FC<CharProps> = ({ char, setChar }) => {
	const perks = PERKS_JSON as Perk[]
	const [highlightedPerk, setHighlightedPerk] = useState(null as Perk | null)

	// Fetch perks from the server
	useEffect(() => {
		const fetchData = async () => {}
		fetchData()
	}, [])

	function togglePerk(perk: Perk) {
		const index = char.perks.indexOf(perk)
		const isSelected = index > -1
		const meetsRequirments = hasRequirments(char, perk)
		if (!meetsRequirments) return
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

	const perkMapper = (perk: Perk, i: number, available: boolean) => {
		const charPerks = char.perks.map((p) => p.name)
		return (
			<li className='hover:border p-1 flex flex-row' onClick={() => setHighlightedPerk(perk)}>
				<PerkComponent
					key={`${i}-${perk.name}`}
					perk={perk}
					onCheck={togglePerk}
					checked={charPerks.includes(perk.name)}
					available={available}
				/>
			</li>
		)
	}

	const availablePerks = perks.filter((perk) => hasRequirments(char, perk)).sort(levelSorter)
	const lockedPerks = perks.filter((perk) => !hasRequirments(char, perk)).sort(levelSorter)

	const perkList = [
		...availablePerks.map((perk, i) => perkMapper(perk, i, true)),
		...lockedPerks.map((perk, i) => perkMapper(perk, i, false)),
	]

	return (
		<div id='perks' className='flex flex-col max-h-screen'>
			<h2>Available Perks: {char.availablePerks}</h2>
			<div className='w-full flex flex-row'>
				<div className='w-1/2'>
					<ul className='overflow-scroll' style={{ maxHeight: '70vh' }}>
						{perkList}
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
