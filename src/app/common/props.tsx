import { Char } from '../types/char'

export interface CharProps {
    char: Char
    setChar: React.Dispatch<React.SetStateAction<Char>>
}
