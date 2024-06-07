import { Char } from '../types/char'
import { DEFAULT_STATS, STARTING_STAT_POINTS, START_STAT } from './defaults'
import { STAT_PER_FRAME } from './frames'

export type Race = 'human' | 'ghoul' | 'supermutant'
export const RACES = ['human', 'ghoul', 'supermutant']

export const GHOUL_MODS = {
	perception: 2,
	endurance: 1,
}

// Humans: Ability Score Increase: +1 to all 4 stats of your choice
// Super mutants: Your Strength and Endurance increase by +2 while your Agility and Intelligence decrease by -2.
export const SUPER_MUTANT_MODS = {
	strength: 2,
	endurance: 2,
	agility: -2,
	intelligence: -2,
}

export const RACE_TO_MOD = {
	human: {},
	ghoul: GHOUL_MODS,
	supermutant: SUPER_MUTANT_MODS,
}

export function adjustForRace(char: Char): Char {
	console.log('adjusting for', char.race)

	// TODO: extract the frame mod
	const frame = char.frame
	const frameMod = STAT_PER_FRAME[frame]

	switch (char.race) {
		case 'human':
			return {
				...char,
				availableTags: 3,
				availableStatPoints: STARTING_STAT_POINTS + 4, // Humans get 4 stat points
				stats: { ...DEFAULT_STATS, ...frameMod },
			}
		case 'ghoul':
			return {
				...char,
				availableTags: 3,
				availableStatPoints: STARTING_STAT_POINTS,
				stats: {
					...DEFAULT_STATS,
					perception: START_STAT + 2,
					endurance: START_STAT + 1,
					...frameMod,
				},
			}
		case 'supermutant':
			return {
				...char,
				availableTags: 2,
				availableStatPoints: STARTING_STAT_POINTS,
				stats: {
					...DEFAULT_STATS,
					strength: START_STAT + 2,
					endurance: START_STAT + 2,
					agility: START_STAT - 2,
					intelligence: START_STAT - 2,
					...frameMod,
				},
			}
		default:
			return char
	}
}
