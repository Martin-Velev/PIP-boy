import { Stat } from '@/types/stat'
import { Char } from '../types/char'
import { DEFAULT_STATS, STARTING_STAT_POINTS, START_STAT } from './defaults'
import { STAT_PER_FRAME } from './frames'

export type Race = 'human' | 'ghoul' | 'supermutant'
export const RACES: Race[] = ['human', 'ghoul', 'supermutant']

export const GHOUL_MODS: Record<Stat, number> = {
	perception: 2,
	endurance: 1,
	strength: 0,
	charisma: 0,
	intelligence: 0,
	agility: 0,
	luck: 0,
}

// Humans: Ability Score Increase: +1 to all 4 stats of your choice
// Super mutants: Your Strength and Endurance increase by +2 while your Agility and Intelligence decrease by -2.
export const SUPER_MUTANT_MODS: Record<Stat, number> = {
	strength: 2,
	endurance: 2,
	agility: -2,
	intelligence: -2,
	perception: 0,
	charisma: 0,
	luck: 0,
}

export const RACE_TO_TAG_SKILL: Record<Race, number> = {
	human: 3,
	ghoul: 3,
	supermutant: 2,
}

export const RACE_TO_MOD = {
	ghoul: GHOUL_MODS,
	supermutant: SUPER_MUTANT_MODS,
}

export const RACE_DESCRIPTION = {
	human: `
		3 tag skills ( +15 to selected skill)
		It's hard to make generalizations about humans, but your human character has these traits:
		Ability Score Increase: +1 to all 4 stats of your choice
		Age. Humans reach adulthood in their late teens and live less than a century.
		Alignment. Humans tend toward no particular alignment. The best and the worst are found among them.
		Size. Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.
		Speed. Your base walking speed is 30 feet.
		Languages. You can speak, read, and write English and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialect
	`,
	ghoul: `
		Ghouls are humans who, by some cosmic fluke, became functionally immortal from radiation. While many ghouls are from before the war, any person can become a ghoul. However, this should never be relied on, as one’s chances of actually becoming a ghoul are astronomically low.
		Ghouls hold a unique place in all forms of society. In more tribal societies, they are viewed as evil creatures of the night or honored elders. More established societies view ghouls as disgusting freaks, often calling them “zombies”, leading to them often forming their own settlements. In post-post-apocalyptic societies, such as the New California Republic, ghouls retain citizenship and are treated as valuable sources of pre-war knowledge. and in some settlements they are treated as any other.
		3 tag skills ( +15 to selected skill)
		
		Ability Score Increase. Your Perception score increases by 2 ,your Endurance score increases by 1.
		Age. Ghouls do not age, though the level to which their skin has rot is typically considered a sign of maturity.
		Alignment. While their old world origins draw them toward lawful alignments, they are capable of anything.
		Size. Ghouls, similar to humans, vary widely in height and build, from barely 5 feet to well over 6 feet tall. Your size is Medium.
		Speed. Your base walking speed is 30 feet.
		Child of the Atom. Radiation  immune, however you cannot age or reproduce.
		Languages. You can speak, read, and write English and one other language of your choice.
		Ghoul Friendship. Feral Ghouls won’t attack you unless provoked 
	`,
	supermutant: `
		Unless they are of the rare intelligent sort or raised in civilized society, their names are based in grunts and made simple.
		Male: Drowg, Mog, Lov, Plog, Greeg, Tord, Huck, Female: Teeb, Lop, Goop, Hup, Push, Agh, Pod, 
		Super Mutant Traits
		2 tag skills ( +15 to selected skill)
		Tall, mighty, and angry, radiation has created a radical breed of human complete with grayish green skin.
		Ability Score Increase. Your Strength and Endurance increase by +2 while your Agility and Intelligence decrease by -2.
		Age. Super mutants do not visibly age, being able to live for hundreds of years, and are considered fully grown the moment they are converted.


		Alignment. Full of animalistic rage and a strong will to survive, they are often neither lawful nor good. They look after themselves, without a code. Most super mutants are chaotic neutral.

		Size. There is not a Super Mutant that is under 6'6". Your size is Large.
		Speed. Your base walking speed is 30 feet despite wider strides, on account of having to carry so much weight.
		Irradiated Blood. Radiation  immune, however you cannot age or reproduce.
		Master’s Design. Darkvision 60ft in dim light. After a Short or Long rest you gain a number of temporary hit points equalling your Level. ( Fear the Reaper ) halves these temp HP points and makes them obtainable only on a Long rest.
		Carnivore. Vegetation is rare in irradiated areas where Super Mutants are spawned, and so Super Mutants can only eat meat based foods.
		Awkward. Power armor must be refitted to fit you.
		Languages. English
		Humans are extremely prejudice and will shoot from a distance until someone mediate
`,
}
