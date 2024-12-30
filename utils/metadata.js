/**
 * Insert any SEO-related data here.
 */

const { calculateAge } = require('./functions')

const siteName = `https://giuseppedelcampo.netlify.app/`

const title = `Giuseppe Del Campo | ${calculateAge('10-11-1999')} Years Old Front-end Developer`

const description = `Passionate Front-end Developer based in Milan currently working at Deloitte Digital as consultant, focused on Calzedonia e-commerce projects.
                Experienced in multiple contexts including clinical, industrial and e-commerce, both in consulting and internal. Skilled mostly in React and Vue environments with strong focus on writing robust, performant and most of all maintanable code.`

export { siteName, title, description }
