import path from 'path'
import fs from 'fs'
import { Trait } from '@/app/types/trait'

export function GET(req: Request) {
	const filePath = path.join(process.cwd(), 'data/traits.txt')
	const textFile = fs.readFileSync(filePath, 'utf-8')
	const traits = textFile.split('\n\n').reduce((acc: Trait[], trait: string) => {
		const title = trait.split('\n')[0]
		const description = trait.split('\n').slice(1).join('\n')
		const newTrait = { title, description }

		return [...acc, newTrait]
	}, [])

	const response = Response.json({ traits })
	return response
}
