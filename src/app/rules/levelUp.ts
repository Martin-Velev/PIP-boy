import { INT_TO_SKILL_GAIN } from '../constants'
import { Char } from '../types/char'

export function levelUp(char: Char): Char {
	const newChar = { ...char }
	newChar.level += 1
	newChar.availableSkillPoints += INT_TO_SKILL_GAIN[char.stats.intelligence]



	return newChar
}