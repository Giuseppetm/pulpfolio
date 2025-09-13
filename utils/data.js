/**
 * Companies displayed in the hero section as work experience.
 */
const companies = [
	{ name: 'People Lab', href: 'https://www.peoplelab.it/' },
	{ name: 'Egea Tecnologie Informatiche', href: 'https://www.egeatech.com/' },
	{ name: 'Sesar Lab at UniMi', href: 'https://sesar.di.unimi.it/' },
]

/**
 * Work Projects displayed in the hero section.
 */
const workProjects = [
	{ name: 'Dolce & Gabbana', href: 'https://www.dolcegabbana.com/it-it/' },
	{ name: 'Brunello Cucinelli', href: 'https://shop.brunellocucinelli.com/it-it/' },
	{ name: 'Calzedonia', href: 'https://www.calzedonia.com/it/' },
	{ name: 'Whirlpool', href: 'https://www.whirlpool.it/' },
	{ name: 'Smart Bear', href: 'https://cordis.europa.eu/project/id/857172' },
]

/**
 * Themes displayed in the header.
 * There must be a correspondence with `themes.scss` content to work properly.
 */
const themes = [
	{
		name: 'default',
		label: 'Default theme',
		imgSrc: '',
		bgColor: '#EEEEEE',
	},
	{
		name: 'pulpFiction',
		label: 'Pulp Fiction Theme',
		imgSrc: 'pulpFiction.png',
		bgColor: '#222222',
	},
	{
		name: 'bladeRunner',
		label: 'Blade Runner Theme',
		imgSrc: 'bladeRunner.png',
		bgColor: '#002265',
	},
	{
		name: 'theMatrix',
		label: 'The Matrix Theme',
		imgSrc: 'theMatrix.png',
		bgColor: '#222222',
	},
	{
		name: '2001',
		label: '2001 Theme',
		imgSrc: '2001.png',
		bgColor: '#FAFAFA',
	},
	{
		name: 'her',
		label: 'Her Theme',
		imgSrc: 'her.png',
		bgColor: '#FE7271',
	},
	{
		name: 'tron',
		label: 'Tron Theme',
		imgSrc: 'tron.png',
		bgColor: '#0A1216',
	},
	{
		name: 'mrRobot',
		label: 'Mr. Robot Theme',
		imgSrc: 'mrRobot.png',
		bgColor: '#020202',
	},
]

/**
 * Images to show in the first marquee.
 * Be sure to include the files in `images/movies` folder.
 */
const movies = [
	{
		imgSrc: 'gattaca.png',
	},
	{
		imgSrc: 'alien.png',
	},
	{
		imgSrc: 'matrix.png',
	},
	{
		imgSrc: 'theFountain2.png',
	},
	{
		imgSrc: 'royalTenenbaums.png',
	},
	{
		imgSrc: 'chungkingExpress.png',
	},
	{
		imgSrc: 'walterMitty.png',
	},
	{
		imgSrc: 'solaris.png',
	},
	{
		imgSrc: 'theFountain.png',
	},
	{
		imgSrc: 'moonriseKingdom.png',
	},
	{
		imgSrc: 'punchDrunkLove.png',
	},
	{
		imgSrc: 'amelie.png',
	},
	{
		imgSrc: 'parisTexas.png',
	},
	{
		imgSrc: 'bladeRunner2049.png',
	},
]

/**
 * Projects to show in the relative table.
 */
const projects = [
	{
		name: 'Studenti Unimi',
		technologies: ['next', 'react', 'typescript'],
		imgSrc: 'studenti-unimi.png',
		href: 'https://github.com/StudentiUniMi/website',
		year: 'Since 2020',
	},
	{
		name: 'Syndrome Main Computer',
		technologies: ['next', 'react', 'typescript'],
		imgSrc: 'kronos.png',
		href: 'https://github.com/Giuseppetm/syndrome-main-computer',
		year: 'Since 2022',
	},
	{
		name: 'Pulpfolio',
		technologies: ['next', 'react', 'javascript'],
		imgSrc: 'pulpfolio.png',
		href: 'https://github.com/Giuseppetm/pulpfolio',
		year: '2024',
	},
	{
		name: 'Automated Greenhouse',
		technologies: ['arduino', 'c++'],
		imgSrc: 'automated-greenhouse.png',
		href: 'https://github.com/Giuseppetm/automated-greenhouse',
		year: '2018',
	},
]

export { companies, themes, movies, projects, workProjects }
