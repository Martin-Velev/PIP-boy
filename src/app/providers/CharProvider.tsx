'use client'
import {
	createContext,
	useState,
	FC,
	PropsWithChildren,
	Dispatch,
	SetStateAction,
} from 'react'
import { Char } from '../types/char'
import { DEFAULT_HUMAN } from '../rules/defaults'

// Define the char context type
interface CharacterContextType {
	char: Char
	setChar: Dispatch<SetStateAction<Char>>
}

// Create the char context
export const CharContext = createContext<CharacterContextType>({
	char: { ...DEFAULT_HUMAN },
	setChar: () => {},
})

// Create the char provider component
export const CharProvider: FC<PropsWithChildren> = ({ children }) => {
	const [char, setChar] = useState(DEFAULT_HUMAN)

	return (
		<CharContext.Provider value={{ char, setChar }}>
			{children}
		</CharContext.Provider>
	)
}
