import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import '@/styles/globals.scss'
import Head from 'next/head'
import fonts from '@/utils/fonts'
import { movies, projects, themes } from '@/utils/data'

const preloadImages = [
	...themes.map((o) => `/images/movies/${o.imgSrc}`),
	...projects.map((s) => `/images/projects/${s.imgSrc}`),
	...movies.map((s) => `/images/movies/${s.imgSrc}`),
]

if (typeof window !== 'undefined') {
	document.body.style.opacity = 0
}

const MyApp = ({ Component, pageProps }) => {
	useGSAP(() => {
		const lenis = new Lenis()

		const raf = (time) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		gsap.to(document.body, {
			opacity: 1,
			duration: 0.5,
			ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
		})
	})

	useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		const theme = localStorage.getItem('theme')
		if (theme) {
			body.classList.add(`theme-${theme}`)
		} else {
			localStorage.setItem('theme', 'default')
			body.classList.add(`theme-${'default'}`)
		}
	}, [])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Giuseppe Del Campo" />
				<meta property="og:type" content="website" />
				<link rel="icon" href="favicon.jpeg" />

				{/* Preload all static images */}
				{preloadImages.map((src) => (
					<link key={src} rel="preload" as="image" href={src} />
				))}
			</Head>
			<main className={fonts.className}>
				<GoogleAnalytics gaId="G-Y52GX3LQ6P" />
				<Component {...pageProps} />
			</main>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default MyApp
