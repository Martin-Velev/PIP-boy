import { FTR } from '@/types/perk'
import { Char } from '../types/char'
import { getStatMod } from './stats'

export const INT_TO_SKILL_GAIN = {
	1: 11,
	2: 11,
	3: 12,
	4: 12,
	5: 13,
	6: 13,
	7: 14,
	8: 14,
	9: 15,
	10: 15,
}

export function levelUp(char: Char, hpGain: number = 0): Char {
	const newChar = { ...char }

	// LEVEL UP
	newChar.level += 1
	// ADD AVAILABLE SKILLS
	const int = newChar.stats.intelligence as keyof typeof INT_TO_SKILL_GAIN
	newChar.availableSkillPoints += INT_TO_SKILL_GAIN[int]

	const perks = char.perks.map((perk) => perk.name)
	const hasFTR = perks.includes(FTR)

	// ADD AVAILABLE PERKS EVERY EVEN LEVEL
	// Fear the reaper grants you a perk every level instead of on even levels
	if (newChar.level % 2 === 0 || hasFTR) {
		newChar.availablePerks = char.availablePerks + 1
	}

	return newChar
}
