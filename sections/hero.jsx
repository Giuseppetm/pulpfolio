import React from 'react'
import ImagesMarquee from '@/components/imagesMarquee'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { companies } from '@/utils/data'

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(
			new SplitType('.title', { types: 'chars' }).chars,
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.05,
				duration: 1.5,
				ease: 'power4.out',
			},
		)
	})

	return (
		<section className={'hero'}>
			<div className="container mx-auto">
				<div className={'title'}>
					<h1>
						Giuseppe
						<div className={'new-line'} /> Del Campo
					</h1>
				</div>
			</div>

			<ImagesMarquee />

			<div className="container mx-auto">
				<div className={'subtitle'}>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-12 xl:col-span-8 description">
							<p>
								<b className={'accent'}>Passionate Frontend Engineer</b> based in Milan currently working at{' '}
								<b>
									<a href="https://www.deloittedigital.com/it/en.html">Deloitte Digital</a>
								</b>{' '}
								as consultant, focused on e-commerce projects such as{' '}
								<b>
									<a href="https://www.calzedonia.com/it/">Calzedonia</a>.
								</b>
							</p>

							<p>
								Experienced in multiple contexts including clinical, industrial and e-commerce, both in consulting and
								internal. Skilled mostly in React and Vue environments with strong focus on writing robust, performant and
								most of all maintanable code.
							</p>
						</div>

						<div className="2xl:col-span-2 2xl:col-start-11 col-span-3 col-start-10 work-details-col">
							<div className={'work-details'}>
								<p className={'accent'}>Worked for</p>
								{companies.map((company, index) => (
									<p key={index}>
										{' '}
										<a href={company.href}>{company.name} --</a>{' '}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
