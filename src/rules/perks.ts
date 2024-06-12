import { Char } from '@/types/char'
import { Perk } from '@/types/perk'

export function hasRequirments(char: Char, perk: Perk) {
    const lvlMet = char.level >= perk.level

    
}


export const levelSorter = (a: Perk, b: Perk) => a.level - b.level