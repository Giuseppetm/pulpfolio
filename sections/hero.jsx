import ImagesMarquee from "@/components/imagesMarquee";
import gsap from "gsap";
import SplitType from 'split-type';
import { useGSAP } from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            new SplitType('.title', { types: 'chars' }).chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1.5,
                ease: 'power4.out',
            }
        );
    });

    return (
        <section className={"hero"}>
            <div className="container mx-auto">
                <div className={"title"}>
                    <h1>
                        Giuseppe<div className={"new-line"} /> Del Campo
                    </h1>
                </div>
            </div>

            <ImagesMarquee />

            <div className="container mx-auto">
                <div className={"subtitle"}>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 xl:col-span-8 description">
                            <p>
                                <b className={"accent"}>Passionate Frontend Developer</b> at <b><a href="https://www.deloittedigital.com/it/en.html">Deloitte Digital</a></b> based in Milan,
                                currently focused on e-commerce projects.
                            </p>

                            <p>
                                Experienced in multiple contexts such as clinical, industrial, and e-commerce related fields.
                                Skilled mostly in React and Vue environments with further knowledge in .NET with the latest front-end frameworks both web and mobile.
                            </p>
                        </div>
                        <div className="col-span-2 col-start-11 work-details-col">
                            <div className={"work-details"}>
                                <p className={"accent"}>Worked for</p>
                                <p><a href="https://www.peoplelab.it/">People Lab /</a></p>
                                <p><a href="https://protocube.it/">Protocube Reply /</a></p>
                                <p><a href="https://whirlpoolcorp.com/">Whirlpool /</a></p>
                                <p><a href="https://keycrime.com/">Keycrime /</a></p>
                                <p><a href="https://www.egeatech.com/">Egea Tecnologie Informatiche /</a></p>
                                <p><a href="https://sesar.di.unimi.it/">Sesar Lab at UniMi /</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;