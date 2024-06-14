import { Background } from '@/rules/backgrounds'
import { Frame } from '@/rules/frames'
import { Race } from '@/rules/races'
import { Perk } from '@/types/perk'
import { Skill } from '@/types/skills'
import { Stat } from '@/types/stat'
import { Trait } from '@/types/traits'

export type Char = {
	name: string
	level: number
	hp: number
	maxHP: number

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
	statMods: {
		strength: { [key: string]: number }
		perception: { [key: string]: number }
		endurance: { [key: string]: number }
		charisma: { [key: string]: number }
		intelligence: { [key: string]: number }
		agility: { [key: string]: number }
		luck: { [key: string]: number }
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

export function getStat(char: Char, stat: Stat): number {
	const relevantMods = char.statMods[stat]
	const totalModifier = Object.values(relevantMods).reduce((acc, mod) => acc + mod, 0)
	return char.stats[stat] + totalModifier
}
