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
