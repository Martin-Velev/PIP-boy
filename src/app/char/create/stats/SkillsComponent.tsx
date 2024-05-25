'use client'
import { FC, useEffect, useState } from 'react'
import { Char } from '../../../types/char'
import {
	STARTING_SKILL_POINTS,
	SKILL_MOD_BOILERPLATE,
	MIN_SKILL,
	MAX_SKILL,
} from '@/app/rules/defaults'
import { calculateStatMods } from '@/app/rules/skills'
import { Skills, Skill, SkillName } from '@/app/types/skills'

interface StatsComponentProps {
	char: Char
	setChar: React.Dispatch<React.SetStateAction<Char>>
}

const SkillsComponent: FC<StatsComponentProps> = ({ char, setChar }) => {
	const [availablePoints, setAvailablePoints] = useState(STARTING_SKILL_POINTS)
	const [skillMods, setSkillMods] = useState<Skills>(SKILL_MOD_BOILERPLATE)
	const skills: Skill[] = Object.keys(char.skills) as Skill[]

	function tagSkill(skill: Skill) {
		// Check if skill has been tagged
		const index = char.taggedSkills.indexOf(skill)
		const isSkillTagged = index > -1
		if (!isSkillTagged && char.availableTags > 0) {
			// Tag skill
			setChar({ ...char, availableTags: char.availableTags - 1 })
			char.taggedSkills.push(skill)
		}
		if (isSkillTagged) {
			// Untag skill
			setChar({ ...char, availableTags: char.availableTags + 1 })
			char.taggedSkills.splice(index, 1)
		}

		updateCharSkills(skill)
	}

	useEffect(() => {
		const newSkillMods = calculateStatMods(char.stats, char.taggedSkills)
		setSkillMods(newSkillMods)
	}, [char])

	const updateCharSkills = (skill: Skill, increment: -1 | 1 | 0 = 0) => {
		let newSkills = { ...char.skills }
		newSkills[skill] = newSkills[skill] + increment
		console.log('new skills', newSkills)
		setAvailablePoints(availablePoints - increment)
	}

	const incrementSkill = (char: Char, skill: Skill, increment: -1 | 1) => {
		// No points available
		const inssuficientPoints = increment === 1 && availablePoints === 0
		// Can't reduce skill below 5
		const skillUnderflow = increment === -1 && char.skills[skill] === MIN_SKILL
		// Can't increase skill above 100
		const skillOverflow = increment === 1 && char.skills[skill] === MAX_SKILL
		if (inssuficientPoints || skillUnderflow || skillOverflow) {
			return
		}

		updateCharSkills(skill, increment)
	}
	const skillList = skills.map((skill: Skill) => {
		return (
			<li key={`skill-${skill}`} className='flex flex-row hover:border p-1'>
				<div className='w-1/12'>{char.taggedSkills.includes(skill) ? '□' : ''}</div>

				<div onClick={(e) => tagSkill(skill)} className='w-1/2 cursor-pointer'>
					{SkillName[skill]}
				</div>
				<button className='w-1/6' onClick={(e) => incrementSkill(char, skill, -1)}>
					-
				</button>
				<div className='w-1/6 text-center'>{char.skills[skill] + skillMods[skill]} </div>
				<button className='w-1/6' onClick={(e) => incrementSkill(char, skill, 1)}>
					+
				</button>
			</li>
		)
	})

	return (
		<>
			<div className='w-full items-center flex flex-col justify-center justify-between text-2xl columns-1'>
				<div className='flex flex-row w-full p-10'>
					<div className='w-1/2 flex flex-col'>
						<div>
							<label className='mr-5'>Available Points</label>
							{availablePoints}
						</div>
					</div>
					<div className='w-1/2 flex flex-col'>
						<div>
							<label className='mr-5'>Tags left</label>
							{char.availableTags}
						</div>
					</div>
				</div>
				<ul className='w-full p-10'>{skillList}</ul>
			</div>
		</>
	)
}

export default SkillsComponent
