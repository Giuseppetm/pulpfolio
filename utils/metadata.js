/**
 * Insert any SEO-related data here.
 */

const { calculateAge } = require('./functions')

const siteName = `https://giuseppedelcampo.netlify.app/`

const title = `Giuseppe Del Campo | ${calculateAge('10-11-1999')} Years Old Front-end Engineer`

const description = `Passionate Front-end Engineer based in Milan currently working at Deloitte Digital as consultant, focused on high-impact e-commerce initiatives for leading fashion brands.`

export { siteName, title, description }
