'use client'
import React, { FC, useEffect, useState } from 'react'
import TableComponent from '../../../common/TableComponent'
import { CharProps } from '@/app/common/props'
import PerkComponent from '@/app/common/PerkComponent'
import { Perk } from '@/app/types/perk'

const levelSorter = (a: Perk, b: Perk) => a.level - b.level

const PerksComponent: FC<CharProps> = ({ char, setChar }) => {
	const [perks, setPerks] = useState([])
	const [selectedPerks, setSelectedPerks] = useState([] as Perk[])
	const [highlightedPerk, setHighlightedPerk] = useState(null as Perk | null)

	// Fetch perks from the server
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/perks/json')
				const data = await response.json()

				setPerks(data.perks)
				console.log('Perks:', data.perks)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	function togglePerk(perk: Perk) {
		const index = selectedPerks.indexOf(perk)
		const isSelected = index > -1

		const newSelected = [...selectedPerks]

		if (isSelected) {
			newSelected.splice(index, 1)
		} else {
			newSelected.push(perk)
		}

		setSelectedPerks([...newSelected])
		console.log('Selected perks:', selectedPerks)
	}

	function highlightPerk(perk: Perk) {
		setHighlightedPerk(perk)
	}

	return (
		<>
			<div className='w-full flex flex-row'>
				<div className='w-1/2'>
					<ul>
						{perks.sort(levelSorter).map((perk: any) => (
							<li
								className='hover:border p-1 flex flex-row'
								onClick={() => highlightPerk(perk)}
							>
								<input
									disabled={perk.level > char.level}
									style={{ all: 'revert' }}
									type='checkbox'
									checked={selectedPerks.indexOf(perk) > -1}
									onChange={() => togglePerk(perk)}
								/>
								<div className='w-full flex flex-row'>
									<div>{perk.title}</div>
									<div className='mx-2'>|</div>
									<div>Level: {perk.level}</div>
									<div className='mx-2'>|</div>
									<div className='mr-0'>{perk.requrments}</div>
								</div>

								{/* <PerkComponent
							perk={perk}
							isSelected={selectedPerks.indexOf(perk) > -1}
							onSelect={togglePerk}
						/> */}
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
		</>
	)
}

export default PerksComponent
