import { Char } from './app/types/char'
import { Perk } from './app/types/perk'

export function extractTable(csvFile: string, columns: number): string[][] {
	// Special function to extract a table from a CSV file with extra commas inside
	// TODO: This function assumes only the last cell has commas
	const rows = csvFile.split('\n').map((row) => {
		const initial = row.split(',')
		const cleanCells = initial.slice(0, columns - 1)
		const lastCell = initial.slice(columns - 1, initial.length).join(',')
		return cleanCells.concat(lastCell)
	})
	return rows
}

export function extractJson(perksCsv: string, columns: number): Perk[] {
	const perks = extractTable(perksCsv, columns)
	const perksJson = perks.slice(1).map((perk) => {
		return {
			name: perk[0],
			rank: parseInt(perk[1]),
			level: parseInt(perk[2]),
			requrments: perk[3],
			description: perk[4],
		}
	})
	return perksJson
}

export function validateChar(char: Char): boolean {
	// TODO:

	return true
}
