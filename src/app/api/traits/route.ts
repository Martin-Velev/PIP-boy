import path from 'path'
import fs from 'fs'
import { Trait } from '@/app/types/traits'

export function GET(req: Request) {
	const filePath = path.join(process.cwd(), 'data/traits.txt')
	const textFile = fs.readFileSync(filePath, 'utf-8')
	const traits = textFile.split('\n\n').reduce((acc: Trait[], trait: string) => {
		const name = trait.split('\n')[0]
		const description = trait.split('\n').slice(1).join('\n')
		const newTrait = { name, description }

		return [...acc, newTrait]
	}, [])

	const response = Response.json({ traits })
	return response
}
