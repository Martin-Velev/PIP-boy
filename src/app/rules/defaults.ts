import { Char } from '../types/char'
import { Skill } from '../types/skills'
import { Trait } from '../types/traits'
import { BACKGROUNDS } from './backgrounds'

export const START_STAT = 5
export const MIN_STAT = 1
export const MAX_STAT = 10

export const MIN_SKILL = 5
export const MAX_SKILL = 100

export const STARTING_STAT_POINTS = 33 - 7 * 4 //When starting at 5

export const STARTING_SKILL_POINTS = 0

export const AVAILABLE_TRAITS = 2

export const DEFAULT_STATS = {
	strength: START_STAT,
	perception: START_STAT,
	endurance: START_STAT,
	charisma: START_STAT,
	intelligence: START_STAT,
	agility: START_STAT,
	luck: START_STAT,
}

export const DEFAULT_STAT_MODS = {
	strength: {},
	perception: {},
	endurance: {},
	charisma: {},
	intelligence: {},
	agility: {},
	luck: {},
}

export const DEFAULT_SKILLS = {
	barter: MIN_SKILL,
	energyWeapons: MIN_SKILL,
	explosives: MIN_SKILL,
	guns: MIN_SKILL,
	lockpick: MIN_SKILL,
	medicine: MIN_SKILL,
	melee: MIN_SKILL,
	repair: MIN_SKILL,
	science: MIN_SKILL,
	sneak: MIN_SKILL,
	speech: MIN_SKILL,
	survival: MIN_SKILL,
	unarmed: MIN_SKILL,
}

export const SKILL_MOD_BOILERPLATE = {
	barter: 0,
	energyWeapons: 0,
	explosives: 0,
	guns: 0,
	lockpick: 0,
	medicine: 0,
	melee: 0,
	repair: 0,
	science: 0,
	sneak: 0,
	speech: 0,
	survival: 0,
	unarmed: 0,
}

export const DEFAULT_TAGS = 3

export const DEFAULT_HUMAN: Char = {
	name: '',
	level: 0,
	hp: 0,
	frame: 'AVERAGE_JOE',

	stats: DEFAULT_STATS,
	statMods: DEFAULT_STAT_MODS,

	skills: DEFAULT_SKILLS,
	taggedSkills: [] as Skill[],
	availableTags: DEFAULT_TAGS,

	availableStatPoints: STARTING_STAT_POINTS + 4, // Humans get 4 stat points
	availableSkillPoints: STARTING_SKILL_POINTS,

	traits: [] as Trait[],
	availableTraits: AVAILABLE_TRAITS,

	race: 'human',
	background: BACKGROUNDS[0],
	perks: [],
	availablePerks: 0,
}
