import { FC } from 'react'

interface TableComponentProps {
	rows: string[][] | null
}

const TableComponent: FC<TableComponentProps> = ({ rows }) => {
	// Parse the CSV file into an array of rows
	if (!rows || rows.length < 1 || !rows[0] || rows[0].length < 1) return

	return (
		<table className='table-auto'>
			<thead>
				<tr>
					{rows &&
						rows[0] &&
						rows[0].length > 0 &&
						rows[0].map((header, index) => (
							<th key={index} className='px-4 py-2'>
								{header}
							</th>
						))}
				</tr>
			</thead>
			<tbody>
				{rows.slice(1).map((row, rowIndex) => (
					<tr key={rowIndex}>
						{row &&
							row.length > 0 &&
							row.map((cell, cellIndex) => (
								<td key={cellIndex} className='border px-4 py-2'>
									{cell}
								</td>
							))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TableComponent
