import React from 'react'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { description, siteName, title } from '@/utils/metadata'
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'
import Hero from '@/sections/hero'
import Projects from '@/sections/projects'
import GattacaMarquee from '@/components/gattacaMarquee'
import Footer from '@/components/footer'
import Header from '@/components/header'

MouseFollower.registerGSAP(gsap)

const Index = () => {
	useEffect(() => {
		// eslint-disable-next-line no-unused-vars
		const cursor = new MouseFollower({
			stateDetection: {
				'-pointer': 'a, button, .theme, .project',
			},
		})
	}, [])

	return (
		<>
			<NextSeo
				title={title}
				description={description}
				canonical={siteName}
				openGraph={{
					url: siteName,
					title: title,
					description: description,
					site_name: title,
					type: 'website',
					locale: 'en_US',
					images: [
						{
							url: 'images/preview.png',
							type: 'image/png',
						},
					],
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>
			<Header />
			<Hero />
			<Projects />
			<GattacaMarquee />
			<Footer />
		</>
	)
}

export default Index
