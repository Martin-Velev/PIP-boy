import { Perk } from '@/types/perk'

interface PerkComponentProps {
	perk: Perk
	onCheck: (perk: Perk) => void
	checked: boolean
	available: boolean
}

const PerkComponent: React.FC<PerkComponentProps> = ({ perk, onCheck, checked, available }) => {
	return (
		<>
			<input
				disabled={!available}
				style={{ all: 'revert' }}
				type='checkbox'
				checked={checked}
				onChange={() => onCheck(perk)}
			/>
			<div className='w-full flex flex-row'>
				<div>{perk.name}</div>
				<div className='mx-2'>|</div>
				<div>Level: {perk.level}</div>
				<div className='mx-2'>|</div>
				<div>Ranks: {perk.ranks}</div>
				<div className='mx-2'>|</div>
				<div className='mr-0'>{perk.requrments}</div>
			</div>
		</>
	)
}

export default PerkComponent
