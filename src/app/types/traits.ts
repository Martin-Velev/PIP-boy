export type Trait = {
	name: string
	description: string
}


/**
 * Every time you gain a level, you gain half your hit die less maximum hit points.
 * You add Half your endurance to the hit die at level up. 
 * You can take an additional perk this level. 
 * One perk is received every level after. 
 * You cannot take the Life Giver or Toughness perks
 */
export const FTR = 'Fear the Reaper'