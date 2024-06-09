export type Frame = 'BIG_BRAIN' | 'LIGHT_FRAME' | 'AVERAGE_JOE' | 'BIG_HOSS' | 'HULK'
export const FRAMES: Frame[] = ['BIG_BRAIN', 'LIGHT_FRAME', 'AVERAGE_JOE', 'BIG_HOSS', 'HULK']

// Big Brain: Your Intelligence and Agility  increase by +2, you gain 1 tag skill linked to intelligence, of  your choice, and your hit die is 1d4.
// Light Frame: Your Agility increases by +2 and your hit die is 1d6, sneak attacks deals an additional 1d4.
// Average Joe: Your hit die is 1d8.
// Big Hoss: Your Agility  decreases by -2 and your hit die is 1d10
// Hulk: Your Intelligence and Agility  both decrease by -2, and your hit die is 1d12
export const FRAME_HIT_DIE_MAP = {
	BIG_BRAIN: 4,
	LIGHT_FRAME: 6,
	AVERAGE_JOE: 8,
	BIG_HOSS: 10,
	HULK: 12,
}

export const STAT_PER_FRAME = {
	BIG_BRAIN: { intelligence: 2, agility: 2 },
	LIGHT_FRAME: { agility: 2 },
	AVERAGE_JOE: {},
	BIG_HOSS: { agility: -2 },
	HULK: { intelligence: -2, agility: -2 },
}


export const FRAME_DESC_MAP = {
	BIG_BRAIN: 'Your Intelligence and Agility  increase by +2, you gain 1 tag skill linked to intelligence, of  your choice, and your hit die is 1d4.',
	LIGHT_FRAME: 'Your Agility increases by +2 and your hit die is 1d6, sneak attacks deals an additional 1d4.',
	AVERAGE_JOE: 'Your hit die is 1d8.',
	BIG_HOSS: 'Your Agility  decreases by -2 and your hit die is 1d10',
	HULK: 'Your Intelligence and Agility  both decrease by -2, and your hit die is 1d12',
}