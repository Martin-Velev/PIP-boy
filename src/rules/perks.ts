import { Char } from '@/types/char'
import { Perk } from '@/types/perk'
import { Skill } from '@/types/skills'
import { STAT_ABBR, Stat } from '@/types/stat'

export function hasRequirments(char: Char, perk: Perk): boolean {
	const lvlMet = char.level >= perk.level
	if (!lvlMet) return false

	// STAT Requirment
	const requirments: { [key: string]: number } = {}
	const stats: Stat[] = Object.keys(char.stats) as Stat[]
	for (const stat of stats) {
		const abbr = STAT_ABBR[stat]
		const regex = new RegExp(`${abbr}\\s(\\d+)`)
		const perkStatRequirment = perk.requrments.match(regex)
		if (!perkStatRequirment || perkStatRequirment.length < 2) continue
		const reqMet = char.stats[stat] >= parseInt(perkStatRequirment[1])

		// Does not meet stat requirement
		if (!reqMet) return false

		requirments[stat] = parseInt(perkStatRequirment[1])
	}

	// Skill Requirment
	const skills = Object.keys(char.skills) as Skill[]
	for (const skill of skills) {
		const regex = new RegExp(`${skill}\\s(\\d+)`)
		const perkSkillRequirment = perk.requrments.toLocaleLowerCase().match(regex)
		if (!perkSkillRequirment || perkSkillRequirment.length < 2) continue
		const reqMet = char.skills[skill] >= parseInt(perkSkillRequirment[1])

		// Does not meet skill requirement
		if (!reqMet) return false

		requirments[skill] = parseInt(perkSkillRequirment[1])
	}

	return true
}

export const levelSorter = (a: Perk, b: Perk) => a.level - b.level
