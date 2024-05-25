import { Background } from '../rules/backgrounds'
import { Frame } from '../rules/frames'
import { Race } from '../rules/races'
import { Perk } from './perk'
import { Skill } from './skills'
import { Trait } from './traits'

export type Char = {
	name: string
	level: number
	hp: number

	race: Race
	frame: Frame
	background: Background
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

	perks: Perk[]
	availablePerks: number
}
