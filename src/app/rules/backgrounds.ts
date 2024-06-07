import { Skill } from '../types/skills'

export type Background = {
	name: string
	description: string
	skillMods: {
		[key: string]: number
	}
}

export const BACKGROUNDS: Background[] = [
	{
		name: 'Courier',
		skillMods: {
			survival: 5,
			guns: 5,
		},
		description:
			'You are a courier, one of the brave few who\nmake their living ensuring that the disparate\ncommunities of the wasteland remain in touch.\nWhen caravans or larger groups are going\nthe same way you join them for safety, but\nsometimes the only way to ensure a package\narriving on time is to risk the journey alone.\nThe role of courier is a job that attracts\nthe brave and the reckless, and in which only\nskilled survivors thrive. Most couriers are\nself-employed, but typically establish working\nrelationships with one or more delivery\ncompanies, such as the Mojave Express in\nPrimm.\nSkill Bonus: Survival + 5, Guns +5\nTool Proficiencies: Two chosen from any\ngaming set, any handheld musical instrument,\nor Horse riding \nEquipment: an iron pot, a lighter, a set\nof traveler’s clothes, one package (worth 30\ncaps upon delivery in the next settlement you\nvisit, either to the local delivery company if\nthere is one or else the addressee).\nFeature: Courier’s Cachet\nAll civilized folk respect a courier and the\nrole they play in keeping communications open.\nAs a courier, you can generally find a place\nto stay at a 50% discount in any settlement,\nexcept among raiders and tribals. As a seasoned\ntraveler you understand the caravanner’s code,\nand know how to approach other traders out in\nthe wastes. You can almost always persuade\nother travelers to share their fires, their\nshelter, and sometimes their food with you and\nyour comrades. Of course, you are expected to\noffer the same courtesies.\n',
	},
	{
		name: 'Caravanner',
		skillMods: {
			barter: 5,
			survival: 5,
		},
		description:
			'You belong to one of the caravan companies\nthat keep trade moving throughout the Mojave\nand other areas of the wasteland. Examples\ninclude the Crimson Caravan and the Happy\nTrails Caravan Company.\nSkill Bonus: Barter +5, Survival +5 \nTool Proficiencies: One type of gaming set,\nYou Know how to ride a horse\nEquipment: an iron pot, a lighter, a set\nof traveler’s clothes, a symbol of your\naffiliation to your caravan company, a pouch\ncontaining 15 caps.\nFeature: Caravanner’s Contacts\nAs a member of a caravan company, you can\nexpect to receive room and board at any of\nthat company’s own wayhouses, if it has any.\nYou also establish relationships with in\ncolonel settlements, allowing you to find a place to stay at a 50% discount. Finally,you understand the caravanner’s code, and\nknow how to approach other traders out in the\nwastes. You can almost always persuade other\ntravelers to share their fires, their shelter,\nand sometimes their food with you and your\ncomrades. Of course, you are expected to offer\nthe same courtesies.',
	},
	{
		name: 'Charlatan',
		skillMods: {
			speech: 5,
			sneak: 5,
		},
		description:
			'You are a courier, one of the brave few who\nmake their living ensuring that the disparate\ncommunities of the wasteland remain in touch.\nWhen caravans or larger groups are going\nthe same way you join them for safety, but\nsometimes the only way to ensure a package\narriving on time is to risk the journey alone.\nThe role of courier is a job that attracts\nthe brave and the reckless, and in which only\nskilled survivors thrive. Most couriers are\nself-employed, but typically establish working\nrelationships with one or more delivery\ncompanies, such as the Mojave Express in\nPrimm.\nSkill Bonus: Survival + 5, Guns +5\nTool Proficiencies: Two chosen from any\ngaming set, any handheld musical instrument,\nor Horse riding \nEquipment: an iron pot, a lighter, a set\nof traveler’s clothes, one package (worth 30\ncaps upon delivery in the next settlement you\nvisit, either to the local delivery company if\nthere is one or else the addressee).\nFeature: Courier’s Cachet\nAll civilized folk respect a courier and the\nrole they play in keeping communications open.\nAs a courier, you can generally find a place\nto stay at a 50% discount in any settlement,\nexcept among raiders and tribals. As a seasoned\ntraveler you understand the caravanner’s code,\nand know how to approach other traders out in\nthe wastes. You can almost always persuade\nother travelers to share their fires, their\nshelter, and sometimes their food with you and\nyour comrades. Of course, you are expected to\noffer the same courtesies.\n',
	},
	{
		name: 'Criminal',
		skillMods: {
			guns: 5,
		},
		description:
			'Larger settlements in the wasteland are often\nplagued with or even run by large criminal\nfamilies such as the Chairmen and the Omertas, Talon Company.\nYou belong to one of these organizations\nSkill Bonus:Guns +5 \nEquipment: a crowbar, a set of common\nclothes, a pouch containing 15 caps.\nFeature: Family Connections\nYour position and influence within your crime\nfamily is recognized by other members, as well\nas among the family’s rivals. Members of the\norganization defer to you if they are of a\nlower position and you are able requisition\nsimple equipment for temporary use.\nYou can also get messages to and from other\ncriminals you know, even over great distances,\nby exploiting vast networks of contacts\nincluding sympathetic or blackmailed couriers\nand caravan master',
	},
	{
		name: 'Follower of the Apocalypse',
		skillMods: {
			medicine: 5,
			science: 5,
		},
		description:
			'You are a member of the Followers of the\nApocalypse, a beneficent organization devoted\nto the care of the needy, to preserving\nprecious knowledge, and to ensuring that the\nfollies that led to the Great War are never\nrepeated. They are never shy about speaking\nout against those in power when they believe\nthat the best interests of the common man are\nnot being protected, which sometimes has them\nbranded as seditious anarchists.\nSkill Bonus: Medicine +5 , Science +5\nTool Proficiencies: Two types of artisan’s\ntools.\nEquipment: 3 stimpaks and a docto’rs bag, a\nset of commoner’s clothes.\nFeature: Follower’s Favor\nYou command the respect of other Followers,\nas well as many citizens of the wasteland who\nappreciate the work that the Followers do.\nYou and your companions can expect to receive\nhospitality and succor from other Followers,\nwithin their means to do so.\nYou might also have ties to a specific\nmission and be considered a resident there.\nWhile near this place, you can call upon the\nother Followers who live there for assistance,\nprovided the assistance you ask for is not\nhazardous and you remain in good standing with\nthem.',
	},
	{
		name: 'Former Brotherhood',
		skillMods: {
			energyWeapons: 5,
			science: 5,
		},
		description:
			'You are a former member of the Brotherhood\nof Steel, a militant organization formed in\nthe wake of the apocalypse from remnants of\nthe Armed Forces and government scientists.\nIn spite of the high-minded ideals of the\ngroup, their heavy-handed approach to dealing\nwith other factions and tendency to hoard\ntechnology that would help right now to be\npreserved for a purely hypothetical future\nturned you away from their doctrine.\nSkill Bonus: Energy Weapons +5 Science +5  \nEquipment: Brotherhood dog tag, a set of\ntraveler’s clothes, a minor technological\nwidget (refer to the trinket table for\nexamples), a pouch containing 15 caps.\nFeature: Brotherhood Intelligence\nYou are a former member of the Brotherhood,\nand still have useful knowledge about their\noperations. You know the location of local\nfacilities other than top-secret sites above\nyour old clearance level. Additionally, when\nyou are in an Brotherhood location, there is\na 30% chance that you know or can guess the\naccess codes for terminal-locked doors to non-\ncritical areas when their Hacking DC is 15 or less.\nIf you encounter other former Brotherhood,\nthey are sometimes predisposed to offer you assistance\nif it doesn’t unduly endanger them and is\nwithin their means.\nFinally, during any physical conflict\nin which you are opposed by members of the\nBrotherhood of Steel, they always attempt to\ntake you alive unless you leave them no choice\nbut to kill you. Some officers might simply\nwant to see you interrogated and punished\nfor your betrayal, while others might be\nsympathetic towards you. The exact reason\nfor your attempted capture is left to GM\nDiscretion.',
	},
	{
		name: 'Scientist',
		skillMods: {
			medicine: 5,
			science: 5,
		},
		description:
			'You are one of a rare few individuals actively\ntrying to preserve and restore the advances\nof pre-War science and have dedicated your\nlife so far to the pursuit of scientific\nachievement.\nSkill Bonus: Medicine=5, Science+5\nTool Proficiencies: Your choice of Chem\nCook’s Supplies, Herbalism Kit, or Mechanic’s\nTools.\nEquipment: materials to make either 5 stimpaks or 1 of each: buffout, psycho, med-x.. A set of traveler’s clothes, a set of\nfine clothes.\nFeature: Scientific inquiry \nYou intuitively grasp the purpose of most old\nworld devices, technologies, and scientific\nexperiments you encounter without needing to\nmake any kind of ability check to identify\nthem, though you may sometimes require an hour\nto read through relevant materials. This does\nnot confer any special ability to make use of\nthe things you identify without appropriate\nSkills. Additionally, you are generally afforded\nthe respect and goodwill of other members of\nthe scientific community, provided you don’t\nwaste it. Other scientists you know generally\nagree to assist you with tasks that won’t be\nhazardous or significantly costly to them in\nresources or time, provided you remain in good\nstanding with them.\n',
	},

	{
		name: 'Soldier',
		skillMods: {
			guns: 5,
			explosives: 5,
		},
		description:
			'Soldier\nYou are an active or former member of\na military force. Examples include the\nMerc Companies, an armed forces from the people\nand for the people dedicated to protecting the\ncitizens of the Common Wealth, and the NCR\nArmy, whose members defend the territories\nand people of the New California Republic.\nMercenary companies such as the Gunners or\nTalon Company also find employment in the\nwastes. Unfortunately, when not legitimately employed many squads within such companies.\noften turn their training and armaments to ill\nuse, behaving no better than common raiders.\nSkill Bonus: Guns+5 Explosives +5\nTool Proficiencies: One type of gaming set.\nEquipment: Dog tag, a trophy taken from a\nfallen enemy, a set of common clothes, an iron\npot, a lighter, a pouch containing 15 caps, a pack marlboro reds.',
	},
	{
		name: 'Vault Born',
		skillMods: {
			repair: 5,
			science: 5,
		},
		description:
			'You emerged into the wasteland from one of\nVault-Tec’s extraordinary fallout shelters.\nYou likely came from a shelter running one of\ntheir less dangerous experiments, explaining\nthe continuing survival of the community\nwithin your vault. It’s also possible that\nthe intended experiment never began. If\nyou’re unlucky, the sudden activation of a\nnightmarish experiment may have been what\nforced you out into the wastes to begin with.\nFor such a character, the horrors of the\nwasteland might be as nothing compared to what\nthey have escaped from.\nSkill Bonus: Repair +5, Science+5\nTool Proficiencies: Pip-Boy\nEquipment: A numbered vault suit, a Pip-Boy.\nFeature: Secrets of the Vault\nDue to access to superior education, you\nintuitively grasp the original purpose\nof most old world locations, devices, and\npractices without needing to make any kind\nof ability check to identify them,though you\nmay sometimes require an hour to read through\nrelevant materials. This does not confer any\nspecial ability to make use of the things you\nidentify without appropriate skills.\nAdditionally, you possess a secret which\ncould dramatically alter the local balance\npower or the unfolding history of post-nuclear\nAmerica. The secret should have something\nto do with your vault of origin, and can\nbe determined in conjunction with your GM.\nExamples might include the location of the\nvault itself if it is currently hidden,\nknowledge that you brought with you when you\nleft the vault, or a device or other piece of\nsignificant technology.',
	},
	{
		name: 'Raider/Fiend',
		skillMods: {
			guns: 5,
			meleeWeapons: 5,
		},
		description:
			'You are a Chem abusing degenerate, shooting people for fun and most unexpectedly the main faction that adopts stray dogs.\nYou have lived your life in squalor, with fellow degens.\nSkill Bonu: Guns+5, Melee Weapons +5\nRaider’s call: You can discern different Fiend/Raiders from a distance, and try to interact with them peacefully.\nOne drug addiction\nEquipment: A set of traveler’s clothes,\na trophy from a past victim (refer to\nthe trinket table for examples), a pouch\ncontaining 15 caps.Some raider/Fiend armor, 3 doses of Psycho, 2 Med-x, And 1 Buffout \nFeature: Part of the Gang\nYou know how to behave among Raiders to ensure\nyou are treated with respect, or at least\ncaution. You are usually able to gain access\nto camps belonging to your gang (or former\ngang), as long as you remain on friendly terms\nwith them. Additionally, you can generally negotiate access to raider camps for your\ncomrades and yourself, provided the gang in\nquestion can be reasoned with and they are\nnot aware of your own gang affiliation if you\nhappen to be rivals.',
	},
	{
		name: 'Unlucky Bastard',
		skillMods: {
			survival: 5,
			unarmed: 5,
		},
		description:
			'By sheer neglect of Fate or an immeasurable chain of events you have survived this long, and nobody has put a bullet in the back of your head.\nSkill bonus: Survival +5, Unarmed +5\nEquipment: Bum Raggs and a shovel\nFeature: Homeless by choice \nThe critical fail range for those around you and yourself is increased by 1.',
	},
	{
		name: 'Bounty Hunter',
		skillMods: {
			guns: 5,
			speech: 5,
		},
		description:
			'Dirty Deeds done cheap.\nYou have made your living by taking bounties and bringing people to just-...\nWe all know you most of the bounties were for honest people.\nSkill Bonus: Guns+5, Speech+5\nEquipment: Bounty hunter duster, a .357 revolver \nFeatures: Tricks of the trade \nYou have access/knowledge  to/of  a bounty board, you can negotiate better rates.\nDepending on your decided alignment, different bounties can be available to you.',
	},
	{
		name: 'Texan',
		skillMods: {
			guns: 5,
			explosives: 5,
		},
		description:
			'Citizen of the great State of Texas, gunpowder drinkin, Whiskey shootin cowpoke.\nSkill Bonus: Guns +5, Explosives +5 \nEquipment: 9mm pistol or a .357 revolver, 3 sticks of dynamite \nFeatures: Coming from out West you came here for riches, or to escape your past. Other Texans like you and are more willing to help. On the other hand the natives or the Voodoo Church distrust you and will have more negative opinion on you barging in on their land.',
	},
	{
		name: 'Voodoo Church initiate',
		skillMods: {
			survival: 5,
			meleeWeapons: 5,
		},
		description:
			'Native person to New Orleans and part of the voodoo church.\nSkill Bonus: Survival +5, Melee Weapons +5\nEquipment: A machete, a small pouch with spice, small, makeshift home somewhere around New orleans\nFeatures:You are New Orleans born and raised. You are part of the  Voodoo Church and they have a positive affinity towards you. Texans dislike and distrust you. You cannot be a Ghoul sadly as the Church dislikes Ghouls, and does not take them as members.',
	},
]
