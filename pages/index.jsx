import React from 'react'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { description, siteName, title } from '@/utils/metadata'
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'
import Hero from '@/components/sections/hero/hero'
import Projects from '@/components/sections/projects/projects'
import GattacaMarquee from '@/components/marquee/gattaca/gattacaMarquee'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

MouseFollower.registerGSAP(gsap)

const Index = () => {
	useEffect(() => {
		new MouseFollower({
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
