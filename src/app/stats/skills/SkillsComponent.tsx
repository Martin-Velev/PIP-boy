'use client'
import { SKILL_MOD_BOILERPLATE, MIN_SKILL, MAX_SKILL } from '@/rules/defaults'
import { calculateSkillMods } from '@/rules/skills'
import { Char } from '@/types/char'
import { Skills, Skill, SkillName } from '@/types/skills'
import { FC, useState, useEffect } from 'react'

interface StatsComponentProps {
	char: Char
	setChar: React.Dispatch<React.SetStateAction<Char>>
}

const SkillsComponent: FC<StatsComponentProps> = ({ char, setChar }) => {
	const [skillMods, setSkillMods] = useState<Skills>(SKILL_MOD_BOILERPLATE)
	const skills: Skill[] = Object.keys(char.skills) as Skill[]

	function tagSkill(skill: Skill) {
		// Check if skill has been tagged
		const index = char.taggedSkills.indexOf(skill)
		let newChar = { ...char }
		let taggedSkills = [...char.taggedSkills]
		const isSkillTagged = index > -1
		if (!isSkillTagged && char.availableTags > 0) {
			// Tag skill
			taggedSkills.push(skill)
			newChar = { ...newChar, availableTags: char.availableTags - 1, taggedSkills }
		}
		if (isSkillTagged) {
			// Untag skill
			taggedSkills.splice(index, 1)
			newChar = { ...newChar, availableTags: char.availableTags + 1, taggedSkills }
		}
		setChar(newChar)
	}

	useEffect(() => {
		const newSkillMods = calculateSkillMods(char)
		setSkillMods(newSkillMods)
	}, [char])

	const incrementSkill = (char: Char, skill: Skill, increment: -1 | 1) => {
		// No points available
		const inssuficientPoints = increment === 1 && char.availableSkillPoints === 0
		// Can't reduce skill below 5
		const skillUnderflow = increment === -1 && char.skills[skill] === MIN_SKILL
		// Can't increase skill above 100
		const skillOverflow = increment === 1 && char.skills[skill] === MAX_SKILL
		if (inssuficientPoints || skillUnderflow || skillOverflow) {
			return
		}

		let skills = { ...char.skills }
		skills[skill] = skills[skill] + increment
		setChar({ ...char, skills, availableSkillPoints: char.availableSkillPoints - increment })
	}
	const skillList = skills.map((skill: Skill, i) => {
		console.log('tagged', char.taggedSkills)
		return (
			<li key={`${i}-skill-${skill}`} className='flex flex-row hover:border p-1'>
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
			<div
				id='skills'
				className='p-0 m-0 overflow-scroll w-full items-center flex flex-col justify-center justify-between text-2xl columns-1'
				style={{
					maxHeight: '85vh',
				}}
			>
				<div className='flex flex-row w-full px-10 pt-10 justify-center text-center '>
					<div className='w-1/2 flex flex-col'>
						<div>
							<label className='mr-5'>Available Points</label>
							{char.availableSkillPoints}
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
