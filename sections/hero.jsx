import React from 'react'
import ImagesMarquee from '@/components/imagesMarquee'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { companies, workProjects } from '@/utils/data'

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
									<a href="https://www.deloittedigital.com/it/en.html" target="_blank" rel="noreferrer">
										Deloitte Digital
									</a>
								</b>{' '}
								as consultant, focused on high-impact e-commerce initiatives for leading fashion brands.
							</p>

							<p>
								Co-founder of{' '}
								<a href="https://github.com/StudentiUniMi" target="_blank" rel="noreferrer">
									<b>StudentiUniMi</b>
								</a>
								, an officially recognized university platform that connects over 25,000 students across all degree
								programs.
							</p>

							<p>
								Experienced across clinical, industrial, and e-commerce domains, with a background in both consulting and
								product-driven environments. Specialized in React and Vue, with a strong focus on server-side rendering and
								performance optimization to deliver scalable, maintainable solutions.
							</p>
						</div>

						<div className="2xl:col-span-3 2xl:col-start-11 col-span-3 col-start-10 work-details-col">
							<div className={'work-details'}>
								<p className={'accent'}>Worked for</p>
								{companies.map((company, index) => (
									<p key={index}>
										{' '}
										{`--//`} <a href={company.href}>{company.name} </a>
									</p>
								))}
							</div>

							<div className={'work-details mt-16'}>
								<p className={'accent'}>Work Projects</p>
								{workProjects.map((company, index) => (
									<p key={index}>
										{' '}
										{`--//`} <a href={company.href}>{company.name} </a>
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
