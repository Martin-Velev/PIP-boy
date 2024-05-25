import { Char } from '../types/char'
import { FRAME_HEALTH_GAIN } from './frames'
import { FTR } from './skills'

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

export function levelUp(char: Char, hpGain: number): Char {
	const newChar = { ...char }

	// LEVEL UP
	newChar.level += 1
	// ADD AVAILABLE SKILLS
	const int = newChar.stats.intelligence
	newChar.availableSkillPoints += INT_TO_SKILL_GAIN[int]

	// ADD HP
	const frame = newChar.frame as keyof typeof FRAME_HEALTH_GAIN
	const hitDie = FRAME_HEALTH_GAIN[frame]
	let newHp
	if (hpGain && hpGain > 0) {
		newHp = char.hp + hpGain
	} else {
		// If no health provided roll for it
		newHp = char.hp = Math.floor(Math.random() * hitDie) + 1
	}
	const perks = char.perks.map((perk) => perk.name)
	const hasFTR = perks.includes(FTR)
	if (hasFTR) {
		// Fear the Reaper halves your health half rounded down
		newHp = Math.floor(newHp / 2)
	}
	// TODO: this could change
	newChar.hp = Math.max(2, newHp)

	// ADD AVAILABLE PERKS EVERY EVEN LEVEL
	// Fear the reaper grants you a perk every level instead of on even levels
	if (newChar.level % 2 === 0 || hasFTR) {
		newChar.availablePerks = char.availablePerks + 1
	}

	return newChar
}
