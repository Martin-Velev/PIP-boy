export type Skill =
	| 'barter'
	| 'energyWeapons'
	| 'explosives'
	| 'guns'
	| 'lockpick'
	| 'medicine'
	| 'melee'
	| 'repair'
	| 'science'
	| 'sneak'
	| 'speech'
	| 'survival'
	| 'unarmed'

export const SKILLS: Skill[] = [
	'barter',
	'energyWeapons',
	'explosives',
	'guns',
	'lockpick',
	'medicine',
	'melee',
	'repair',
	'science',
	'sneak',
	'speech',
	'survival',
	'unarmed',
]

export enum SkillName {
	barter = 'Barter',
	energyWeapons = 'Energy Weapons',
	explosives = 'Explosives',
	guns = 'Guns',
	lockpick = 'Lockpick',
	medicine = 'Medicine',
	melee = 'Melee',
	repair = 'Repair',
	science = 'Science',
	sneak = 'Sneak',
	speech = 'Speech',
	survival = 'Survival',
	unarmed = 'Unarmed',
}

export type Skills = {
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

export const STAT_TO_SKILL = {
	strength: ['melee'],
	perception: ['energyWeapons', 'explosives', 'lockpick'],
	endurance: ['survival', 'unarmed'],
	charisma: ['barter', 'speech'],
	intelligence: ['medicine', 'repair', 'science'],
	agility: ['guns', 'sneak'],
	luck: [],
}

export const SKILL_TO_STAT = {
	melee: 'strength',
	energyWeapons: 'perception',
	explosives: 'perception',
	lockpick: 'perception',
	survival: 'endurance',
	unarmed: 'endurance',
	barter: 'charisma',
	speech: 'charisma',
	medicine: 'intelligence',
	repair: 'intelligence',
	science: 'intelligence',
	guns: 'agility',
	sneak: 'agility',
}
