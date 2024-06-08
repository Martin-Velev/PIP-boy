import { Char } from './char'

export interface CharProps {
    char: Char
    setChar: React.Dispatch<React.SetStateAction<Char>>
}
