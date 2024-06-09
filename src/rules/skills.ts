import { Char } from '../types/char'
import { Skill, SKILL_TO_STAT, Skills } from '../types/skills'
import { Stats, Stat } from '../types/stat'
import { DEFAULT_SKILLS } from './defaults'

// RETURNS list of mods
export function calculateSkillMods(char: Char) {
	const { stats, taggedSkills, background } = char
	const allSkills = Object.keys(DEFAULT_SKILLS) as Skill[]

	// Get skill gain from SPECIAL stats
	let skillMods = allSkills.reduce((acc, skill) => {
		const relevantStat = SKILL_TO_STAT[skill] as Stat
		const relevantMod = (stats[relevantStat] - 1) * 2

		const totalMod = relevantMod

		acc = { ...acc, [skill]: totalMod }
		return acc
	}, {} as Skills)
	// Luck grants +1 to all skills at 3, 5, 7, 9
	const luck = stats['luck']
	let luckMod = 0
	if (luck >= 3) luckMod += 1
	if (luck >= 5) luckMod += 1
	if (luck >= 7) luckMod += 1
	if (luck >= 9) luckMod += 1

	allSkills.forEach((skill) => {
		skillMods[skill] += luckMod
	})
	// Tagged skills get +15
	taggedSkills.forEach((skill) => {
		skillMods[skill] += 15
	})

	// Add skills from Background
	if (background) {
		const { skillMods: bgSkillMods } = background
		Object.keys(bgSkillMods).forEach((skill) => {
			skillMods[skill as Skill] += bgSkillMods[skill as Skill]
		})
	}


	return skillMods
}

export function addSkillMods(skills: Skills, mods: Skills) {
	let newSkills = { ...skills }
	let skillList = Object.keys(skills) as Skill[]
	for (let skill of skillList) {
		newSkills[skill] = skills[skill] + mods[skill]
	}
	return newSkills
}
