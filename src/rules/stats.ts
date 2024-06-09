import { Char } from '../types/char'
import { Stats } from '../types/stat'
import { STARTING_STAT_POINTS, START_STAT } from './defaults'

export function getStatMod(stat: number): number {
	return Math.floor((stat - 10) / 2)
}
