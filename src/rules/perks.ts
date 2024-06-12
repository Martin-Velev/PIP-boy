import { Char } from '@/types/char'
import { Perk } from '@/types/perk'

export function hasRequirments(char: Char, perk: Perk) {
    const lvlMet = char.level >= perk.level

    
}
