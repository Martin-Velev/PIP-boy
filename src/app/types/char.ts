import { Skill } from './skills'
import { Trait } from './trait'

export type StatScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type Frame = 'BIG_BRAIN' | 'LIGHT_FRAME' | 'AVERAGE_JOE' | 'BIG_HOSS' | 'HULK'

export type Char = {
	name: string
	level: number
	hp: number

	race: 'human' | 'ghoul' | 'supermutant'
	frame: string;
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
