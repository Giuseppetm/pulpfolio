import React from 'react'
import Marquee from 'react-fast-marquee'

const GattacaMarquee = () => {
	return (
		<div className={'gattaca-marquee'}>
			<Marquee direction="right" autoFill speed="30">
				GATCATCAGTACGTGTCATGCATGGATCATCAGTACGTGTCATGCATGGATCATCAGTACGTGTCATGCATGGATCATCAGTA
			</Marquee>
			<Marquee direction="right" autoFill speed="30">
				CGTGTCATGCATGGATCATCAGTACGTGTCATGCATGCGATCATCAGTACGTGTCATGCA
			</Marquee>
			<Marquee direction="right" autoFill speed="30">
				GATCATCAGTACGTGTCATGCATGGATCATCAGTACGTGTCATGCATG
			</Marquee>
			<Marquee direction="right" autoFill speed="30">
				ACGTGTCATGCATGGATCATCAGTACGTGTCATGCATGG
			</Marquee>
		</div>
	)
}

export default GattacaMarquee
