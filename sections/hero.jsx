import Header from "@/components/header";
import ImagesMarquee from "@/components/imagesMarquee";

const Hero = () => {
    return (
        <section className={"hero"}>
            <div className="container mx-auto">
                <div className={"title"}>
                    <h1>
                        Giuseppe<div className={"new-line"}/> Del Campo
                    </h1>
                </div>
            </div>

            <ImagesMarquee />
                
            <div className="container mx-auto">
                <div className={"subtitle"}>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 xl:col-span-8 description">
                            <p>
                                <b className={"accent"}>Passionate Frontend Developer</b> at <b><a href="https://www.peoplelab.it/">People Lab Srl</a></b> based in Milan, 
                                currently working for <b><a href="https://protocube.it/">Protocube Reply</a></b> on software development for the management of 3D models. 
                            </p>

                            <p>
                                Experienced in multiple contexts such as clinical, industrial, and e-commerce related fields. 
                                Skilled mostly in React and Vue environments with further knowledge in .NET with the latest front-end frameworks both web and mobile.
                            </p>
                        </div>
                        <div className="col-span-2 col-start-11 work-details-col">
                            <div className={"work-details"}>
                                <p className={"accent"}>Worked for</p>
                                <p><a href="https://www.reply.com/blue-reply/it/">Blue Reply /</a></p>
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