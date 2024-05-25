import { DEFAULT_SKILLS, DEFAULT_STATS, DEFAULT_TAGS, DEFUALT_GHOUL_STATS } from '../constants'
import { Skill } from './skills'
import { Trait } from './trait'

export type Char = {
	name: string
	level: number
	stats: {
		strength: number
		perception: number
		endurance: number
		charisma: number
		intelligence: number
		agility: number
		luck: number
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
