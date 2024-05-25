import path from 'path'
import fs from 'fs'
import { extractTable } from '@/utils'

export function GET(req: Request) {
	const filePath = path.join(process.cwd(), 'data/perks.csv')
	const csvFile = fs.readFileSync(filePath, 'utf-8')
	const perks = extractTable(csvFile, 5)

	const response = Response.json({ perks })
	return response
}
