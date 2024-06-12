const fs = require('fs')
// print current working directory
console.log(process.cwd());

const filePath = './data/perks.csv'
const csvData = fs.readFileSync(filePath, 'utf-8')
const convertedData = convert(csvData)

console.log(convertedData)

function convert(csv) {
	const lines = csv.split('\n')
	//  Name,Ranks,Level,Requirments,Description
	const headers = ['name', 'ranks', 'level', 'requrments', 'description']
	const result = []

	for (let i = 1; i < lines.length; i++) {
		const obj = {}
		const currentLine = lines[i].split(',')

		for (let j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentLine[j].replace(/"/g, "").replace(/\r/g, "").replace(/\n/g, "").replace(/:/g, "")
		}

		result.push(obj)
	}

	return JSON.stringify(result)
}


fs.writeFileSync('./data/perks.json', convertedData)