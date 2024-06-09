'use client'
import React, { FC, useEffect, useState } from 'react'
import { Stat } from '@customTypes/stat'
import { MIN_STAT, MAX_STAT } from '@/app/rules/defaults'
import { CharProps } from '@/app/types/props'
import { getStat } from '@/app/types/char'

const SpecialStatsComponent: FC<CharProps> = ({ char, setChar }) => {
	const { availableStatPoints } = char

	const stats: Stat[] = Object.keys(char.stats) as Stat[]
	const statList = stats.map((stat: Stat) => {
		const incrementStat = (increment: -1 | 1) => {
			const statWithMods = getStat(char, stat)
			// No points available
			const inssuficientPoints = increment === 1 && availableStatPoints === 0
			// Can't reduce stat below 1
			const statUnderflow = increment === -1 && statWithMods === MIN_STAT
			// Can't increase stat above 10
			const statOverflow = increment === 1 && statWithMods === MAX_STAT
			if (inssuficientPoints || statUnderflow || statOverflow) {
				return
			}

			let newStats = { ...char.stats }
			newStats[stat] = newStats[stat] + increment
			setChar({
				...char,
				availableStatPoints: char.availableStatPoints - increment,
				stats: newStats,
			})

			// Mod skills
		}

		return (
			<li key={`stat-${stat}`} className='flex flex-row'>
				<div className='w-1/2 uppercase'>{stat}</div>
				<button className='w-1/6' onClick={(e) => incrementStat(-1)}>
					-
				</button>
				<div className='w-1/6 text-center'>{getStat(char, stat)}</div>
				<button className='w-1/6' onClick={(e) => incrementStat(1)}>
					+
				</button>
			</li>
		)
	})

	return (
		<>
			<div className='w-full items-center flex flex-col justify-center justify-between text-2xl columns-1'>
				<div className='w-full p-10'>
					<div className='w-1/2'>
						<label className='mr-5'>Available Points</label>
						{availableStatPoints}
					</div>
				</div>

				<div className='w-full p-10'>
					<ul className='max-w-sm'>{statList}</ul>
				</div>
			</div>
		</>
	)
}

export default SpecialStatsComponent
