import { DEFAULT_SKILLS } from '../constants'
import { Stat, Stats } from './stat'

export type Skill = 'barter' | 'energyWeapons' | 'explosives' | 'guns' | 'lockpick' | 'medicine' | 'melee' | 'repair' | 'science' | 'sneak' | 'speech' | 'survival' | 'unarmed'

export enum SkillName {
    barter = 'Barter',
    energyWeapons = 'Energy Weapons',
    explosives = 'Explosives',
    guns = 'Guns',
    lockpick = 'Lockpick',
    medicine = 'Medicine',
    melee = 'Melee',
    repair = 'Repair',
    science = 'Science',
    sneak = 'Sneak',
    speech = 'Speech',
    survival = 'Survival',
    unarmed = 'Unarmed'
}

export type Skills = {
    barter: number
    energyWeapons: number
    explosives: number
    guns: number
    lockpick: number
    medicine: number
    melee: number
    repair: number
    science: number
    sneak: number
    speech: number
    survival: number
    unarmed: number
}

export const STAT_TO_SKILL = {
    'strength': ['melee'],
    'perception': ['energyWeapons', 'explosives', 'lockpick'],
    'endurance': ['survival', 'unarmed'],
    'charisma': ['barter', 'speech'],
    'intelligence': ['medicine', 'repair', 'science'],
    'agility': ['guns', 'sneak'],
    'luck': []
}

export const SKILL_TO_STAT = {
    'melee': 'strength',
    'energyWeapons': 'perception',
    'explosives': 'perception',
    'lockpick': 'perception',
    'survival': 'endurance',
    'unarmed': 'endurance',
    'barter': 'charisma',
    'speech': 'charisma',
    'medicine': 'intelligence',
    'repair': 'intelligence',
    'science': 'intelligence',
    'guns': 'agility',
    'sneak': 'agility'
}

// 2 points into int skills per level


// RETURNS list of mods
export function calculateStatMods(stats: Stats, taggedSkills: Skill[] = []) {
    const allSkills = Object.keys(DEFAULT_SKILLS) as Skill[]

    let skillMods = allSkills.reduce((acc, skill) => {
        const relevantStat = SKILL_TO_STAT[skill] as Stat
        const relevantMod = (stats[relevantStat] - 1) * 2

        const totalMod = relevantMod

        acc = { ...acc, [skill]: totalMod }
        return acc
    }, {} as Skills)

    const luck = stats['luck']
    let luckMod = 0
    if (luck >= 3) luckMod += 1
    if (luck >= 5) luckMod += 1
    if (luck >= 7) luckMod += 1
    if (luck >= 9) luckMod += 1

    allSkills.forEach(skill => {
        skillMods[skill] += luckMod
    })

    taggedSkills.forEach(skill => {
        skillMods[skill] += 15
    })
    return skillMods
}

export function addSkillMods(skills: Skills, mods: Skills) {
    let newSkills = { ...skills }
    let skillList = Object.keys(skills) as Skill[]
    for (let skill of skillList) {
        newSkills[skill] = skills[skill] + mods[skill]
    }
    return newSkills
}