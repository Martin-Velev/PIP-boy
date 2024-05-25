import { DEFAULT_SKILLS, DEFAULT_STATS, DEFAULT_TAGS, DEFUALT_GHOUL_STATS, INT_TO_SKILL_GAIN } from '../constants'
import { Skill } from './skills'
import { Trait } from './trait'

// Big Brain: Your Intelligence and Agility  increase by +2, you gain 1 tag skill linked to intelligence, of  your choice, and your hit die is 1d4.
// Light Frame: Your Agility increases by +2 and your hit die is 1d6, sneak attacks deals an additional 1d4.
// Average Joe: Your hit die is 1d8.
// Big Hoss: Your Agility  decreases by -2 and your hit die is 1d10
// Hulk: Your Intelligence and Agility  both decrease by -2, and your hit die is 1d12
export type Frame = 'Big Brain' | 'Light Frame' | 'Average Joe' | 'Big Hoss' | 'Hulk'

export type StatScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type Char = {
	name: string
	level: number
	hp: number

	race: 'human' | 'ghoul' | 'supermutant'
	frame: Frame
	background: string
	stats: {
		strength: StatScore
		perception: StatScore
		endurance: StatScore
		charisma: StatScore
		intelligence: StatScore
		agility: StatScore
		luck: StatScore
	}

	skills: {
		barter: number
		energyWeapons: number
		explosives: number
		guns: number
		lockpick: number
		medicine: number
		melee: number
		repair: number
		science: number
		sneak: number
		speech: number
		survival: number
		unarmed: number
	}
	availableStatPoints: number

	taggedSkills: Skill[]
	availableTags: number
	availableSkillPoints: number

	traits: Trait[]
	availableTraits: number
}


export function levelUp(char: Char): Char {
	const newChar = { ...char }
	newChar.level += 1
	newChar.availableSkillPoints += INT_TO_SKILL_GAIN[char.stats.intelligence]



	return newChar
}

