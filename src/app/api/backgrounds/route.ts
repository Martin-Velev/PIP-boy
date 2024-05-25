import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

export function GET(req: Request) {
	const filePath = path.join(process.cwd(), 'data/backgrounds.json')
	const backgroundsFile = fs.readFileSync(filePath, 'utf-8')
    // console.log('------------')
    // console.log('backgroundsFile', backgroundsFile)
    // console.log('------------')
	const backgrounds = JSON.parse(backgroundsFile)

	const response = Response.json({ backgrounds })
	return response
}
