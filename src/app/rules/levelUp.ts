import { Char } from '../types/char'
import { FTR } from '../types/traits'
import { MAX_STAT, MIN_STAT } from './defaults'
import { FRAME_HEALTH_GAIN } from './frames'
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

	// ADD HP
	// Get the frame of the character
	const frame = newChar.frame as keyof typeof FRAME_HEALTH_GAIN
	const hitDie = FRAME_HEALTH_GAIN[frame]
	if (!hpGain) {
		const roll = Math.floor(Math.random() * hitDie) + 1
		hpGain = roll
	}
	const perks = char.perks.map((perk) => perk.name)
	const hasFTR = perks.includes(FTR)

	const end = newChar.stats.endurance
	const endMod = getStatMod(end)
	hpGain += endMod
	if (hasFTR) {
		hpGain = Math.floor(hpGain / 2)
	}
	newChar.hp += hpGain

	// ADD AVAILABLE PERKS EVERY EVEN LEVEL
	// Fear the reaper grants you a perk every level instead of on even levels
	if (newChar.level % 2 === 0 || hasFTR) {
		newChar.availablePerks = char.availablePerks + 1
	}

	return newChar
}
