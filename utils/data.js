/**
 * Companies displayed in the hero section as work experience.
 */
const companies = [
    { name: "People Lab", href: "https://www.peoplelab.it/" }, 
    { name: "Protocube Reply", href: "https://protocube.it/" }, 
    { name: "Whirlpool", href: "https://whirlpoolcorp.com/" }, 
    { name: "Egea Tecnologie Informatiche", href: "https://www.egeatech.com/" }, 
    { name: "Sesar Lab at UniMi", href: "https://sesar.di.unimi.it/"}
];

/**
 * Themes displayed in the header.
 * There must be a correspondence with `themes.scss` content to work properly.
 */
const themes = [
    {
        name: "default",
        label: "Default theme",
        imgSrc: "",
        bgColor: "#EEEEEE"
    },
    {
        name: "pulpFiction",
        label: "Pulp Fiction Theme",
        imgSrc: "pulpFiction.png",
        bgColor: "#222222"
    },
    {
        name: "bladeRunner",
        label: "Blade Runner Theme",
        imgSrc: "bladeRunner.png",
        bgColor: "#002265"
    },
    {
        name: "theMatrix",
        label: "The Matrix Theme",
        imgSrc: "theMatrix.png",
        bgColor: "#222222"
    },
    {
        name: "2001",
        label: "2001 Theme",
        imgSrc: "2001.png",
        bgColor: "#FAFAFA"
    },
    {
        name: "her",
        label: "Her Theme",
        imgSrc: "her.png",
        bgColor: "#FE7271"
    },
    {
        name: "tron",
        label: "Tron Theme",
        imgSrc: "tron.png",
        bgColor: "#0A1216"
    },
    {
        name: "mrRobot",
        label: "Mr. Robot Theme",
        imgSrc: "mrRobot.png",
        bgColor: "#020202"
    }
];

/**
 * Images to show in the first marquee.
 * Be sure to include the files in `images/movies` folder.
 */
const movies = [
    {
        imgSrc: "gattaca.png"
    },
    {
        imgSrc: "alien.png"
    },
    {
        imgSrc: "matrix.png"
    },
    {
        imgSrc: 'theFountain2.png'
    },
    {
        imgSrc: "royalTenenbaums.png"
    },
    {
        imgSrc: "chungkingExpress.png"
    },
    {
        imgSrc: "walterMitty.png"
    },
    {
        imgSrc: "solaris.png"
    },
    {
        imgSrc: "theFountain.png"
    },
    {
        imgSrc: "moonriseKingdom.png"
    },
    {
        imgSrc: "punchDrunkLove.png"
    },
    {
        imgSrc: "amelie.png"
    },
    {
        imgSrc: "parisTexas.png"
    },
    {
        imgSrc: "bladeRunner2049.png"
    }
];

/**
 * Projects to show in the relative table.
 */
const projects = [
    {
        name: "Studenti Unimi",
        technologies: ['react', 'nextjs', 'typescript'],
        imgSrc: 'studenti-unimi.png',
        href: "https://github.com/StudentiUniMi/website",
        year: 'Since 2020'
    },
    {
        name: "Syndrome Main Computer",
        technologies: ['react', 'javascript'],
        imgSrc: 'kronos.png',
        href: "https://github.com/Giuseppetm/syndrome-main-computer",
        year: '2022'
    },
    {
        name: "Nuxt Sample Webapp",
        technologies: ['vue', 'nuxtjs', 'typescript'],
        imgSrc: 'nuxt-sample-webapp.png',
        href: "https://github.com/Giuseppetm/nuxt-sample-webapp",
        year: '2024'
    },
    {
        name: "Prometheus Portfolio",
        technologies: ['react', 'nextjs', 'javascript'],
        imgSrc: 'prometheus-portfolio.png',
        href: "https://github.com/Giuseppetm/prometheus-portfolio",
        year: '2022'
    },
    {
        name: "Pulpfolio",
        technologies: ['react', 'nextjs', 'javascript'],
        imgSrc: 'pulpfolio.png',
        href: "https://github.com/Giuseppetm/pulpfolio",
        year: '2024'
    }
];

export {
    companies,
    themes,
    movies,
    projects
};
