import { Char } from './types/char'
import { Skill } from './types/skills'
import { Trait } from './types/trait'

// Int 1 = 11 skill points
// Int 2 = 11 skill points
// Int 3 = 12 skill points
// Int 4 = 12 skill points
// Int 5 = 13 skill points
// Int 6 = 13 skill points
// Int 7 = 14 skill points
// Int 8 = 14 skill points
// Int 9 = 15 skill points
// Int 10 = 15 skill points
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

// Big Brain: Your Intelligence and Agility  increase by +2, you gain 1 tag skill linked to intelligence, of  your choice, and your hit die is 1d4.
// Light Frame: Your Agility increases by +2 and your hit die is 1d6, sneak attacks deals an additional 1d4.
// Average Joe: Your hit die is 1d8.
// Big Hoss: Your Agility  decreases by -2 and your hit die is 1d10
// Hulk: Your Intelligence and Agility  both decrease by -2, and your hit die is 1d12
export const FRAME_HEALTH_GAIN = {
	BIG_BRAIN: 4,
	LIGHT_FRAME: 6,
	AVERAGE_JOE: 8,
	BIG_HOSS: 10,
	HULK: 12,
}

export const STAT_PER_FRAME = {
	BIG_BRAIN: { intelligence: 2, agility: 2 },
	LIGHT_FRAME: { agility: 2 },
	AVERAGE_JOE: {},
	BIG_HOSS: { agility: -2 },
	HULK: { intelligence: -2, agility: -2 },
}
