'use client'
import { FC, useEffect, useState } from 'react'
import { Char } from '../../../types/char'
import {
	DEFAULT_SKILLS,
	DEFAULT_SKILL_MODS,
	MAX_SKILL,
	MIN_SKILL,
	STARTING_SKILL_POINTS,
} from '../../../constants'
import { Skill, Skills, SkillName, calculateStatMods } from '../../../types/skills'

interface StatsComponentProps {
	char: Char
	setChar: React.Dispatch<React.SetStateAction<Char>>
}

const SkillsComponent: FC<StatsComponentProps> = ({ char, setChar }) => {
	const [availablePoints, setAvailablePoints] = useState(STARTING_SKILL_POINTS)
	const [skillMods, setSkillMods] = useState<Skills>(DEFAULT_SKILL_MODS)
	// const { char, setChar } = useContext(CharContext)

	const skills: Skill[] = Object.keys(char.skills) as Skill[]

	function reset() {
		setAvailablePoints(STARTING_SKILL_POINTS)
		setChar({ ...char, skills: DEFAULT_SKILLS })
	}

	function tagSkill(skill: Skill) {
		// Check if skill has been tagged
		const index = char.taggedSkills.indexOf(skill)
		const isSkillTagged = index > -1
		if (!isSkillTagged && char.availableTags > 0) {
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
		const skillMods = calculateStatMods(char.stats, char.taggedSkills)
		setSkillMods(skillMods)
	}, [char.stats, char.level, char.taggedSkills, char.availableTags])

	const updateCharSkills = (skill: Skill, increment: -1 | 1 | 0 = 0) => {
		// TODO. figure out how to separate base skills and mods so they don't keep compounding
		let newSkills = { ...char.skills }
		newSkills[skill] = newSkills[skill] + increment
		console.log('new skills', newSkills)
		setAvailablePoints(availablePoints - increment)

		// Skills with added modifiers from stats and and tags
		const skillsWithMods = Object.keys(newSkills).reduce((acc, skill) => {
			const totalSkill = newSkills[skill as Skill] + skillMods[skill as Skill]
			return { ...acc, [skill]: totalSkill }
		}, {} as Skills)
		console.log('total: ', skillsWithMods)

		// TODO: add char property to store skill mods and caluclate them when needed
		// setChar({ ...char, skills: char.s })
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

		// Update char

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
