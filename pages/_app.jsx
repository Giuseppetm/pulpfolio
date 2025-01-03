import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Lenis from '@studio-freight/lenis'
import '@/styles/globals.scss'
import Head from 'next/head'
import fonts from '@/utils/fonts'

const MyApp = ({ Component, pageProps }) => {
	useGSAP(() => {
		const lenis = new Lenis()

		const raf = (time) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
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
				<link rel="icon" href="favicon.jpeg" />
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
