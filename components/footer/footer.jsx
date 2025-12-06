import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

const Footer = () => {
	return (
		<footer>
			<div className="container mx-auto">
				<div className="grid grid-cols-12 md:gap-8 gap-y-12">
					<div className="col-span-12 lg:col-span-8 xl:col-span-8 text-center lg:text-start">
						<a href="mailto:giuseppe.delcampo@outlook.com" className={'get-in-touch'} data-cursor-text={"Let's talk"}>
							Get in touch
						</a>
					</div>

					<div className="col-span-12 lg:col-span-4 xl:col-span-4 lg:mt-4">
						<div className="socials items-center lg:items-start">
							<a href="https://github.com/Giuseppetm">
								<div className="social">
									Github <LuArrowUpRight />
								</div>
							</a>
							<a href="https://www.linkedin.com/in/giuseppe-del-campo/">
								<div className="social">
									Linkedin <LuArrowUpRight />
								</div>
							</a>
							<a href="https://letterboxd.com/Giuseppetm/">
								<div className="social">
									Letterboxd <LuArrowUpRight />
								</div>
							</a>
							<a href="https://www.youtube.com/channel/UC48YylNs29E-9-EgA_0noFw">
								<div className="social">
									Youtube <LuArrowUpRight />
								</div>
							</a>
						</div>

						<div className="credits mt-6 text-center lg:text-start">
							<p>Designed and developed by&nbsp;</p> <a href="https://github.com/Giuseppetm">Giuseppe Del Campo</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
