'use client'
import StatsComponent from './create/stats/StatsComponent'
import SkillsComponent from './create/stats/SkillsComponent'
import { CharContext, CharProvider } from '../providers/CharProvider'
import { FC, PropsWithChildren, useContext } from 'react'
import { Char } from '../types/char'
import { CharProps } from '../common/props'

const CharComponent: FC<CharProps> = ({ char, setChar }) => {
	// const { char, setChar } = useContext(CharContext)

	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newChar = { ...char, name: e.target.value }
		setChar(newChar)
	}

	return (
		<>
			<div className='w-full text-6xl text-center min-height-12'>
				<label htmlFor='name'>Name:</label>
				<input type='text' id='name' value={char.name} onChange={handleNameChange} />
			</div>
			<div className='flex flex-row w-full'>
				<div className='w-1/2'>
					<StatsComponent char={char} setChar={setChar} />
				</div>
				<div className='w-1/2'>
					<SkillsComponent char={char} setChar={setChar} />
				</div>
			</div>

			<div>
				<h3>Traits:</h3>
				<ul>
					{char.traits.map((trait, i) => (
						<li key={i}>
							<h4>{trait.title}</h4>

							<p>{trait.description}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

// function WrappedComponent() {
// 	return (
// 		<CharWrapper>
// 			<CharComponent />
// 		</CharWrapper>
// 	)
// }

export default CharComponent
