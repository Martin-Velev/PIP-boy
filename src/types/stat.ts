export type Stat =
	| 'strength'
	| 'perception'
	| 'endurance'
	| 'charisma'
	| 'intelligence'
	| 'agility'
	| 'luck'

export enum StatName {
	strength = 'Strength',
	perception = 'Perception',
	endurance = 'Endurance',
	charisma = 'Charisma',
	intelligence = 'Intelligence',
	agility = 'Agility',
	luck = 'Luck',
}

export type Stats = {
	strength: number
	perception: number
	endurance: number
	charisma: number
	intelligence: number
	agility: number
	luck: number
}

export const STAT_ABBR = {
	strength: 'ST',
	perception: 'PE',
	endurance: 'EN',
	charisma: 'CH',
	intelligence: 'IN',
	agility: 'AG',
	luck: 'LK',
}