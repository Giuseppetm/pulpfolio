import Header from "@/components/header";
import ImagesMarquee from "@/components/imagesMarquee";

const Hero = () => {
    return (
        <section className={"hero"}>
            <div class="container mx-auto">
                <div className={"title"}>
                    <h1>
                        Giuseppe<div className={"new-line"}/> Del Campo
                    </h1>
                </div>
            </div>

            <ImagesMarquee />
                
            <div class="container mx-auto">
                <div className={"subtitle"}>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 xl:col-span-8 description">
                            <p>
                                <b className={"accent"}>Passionate Frontend Developer</b> at <b>People Lab Srl</b> based in Milan, 
                                currently working for <b>Protocube Reply</b> on software development for the management of 3D models. 
                            </p>

                            <p>
                                Experienced in multiple contexts such as clinical, industrial, and e-commerce related fields. 
                                Skilled mostly in React and Vue environments with further knowledge in .NET with the latest front-end frameworks both web and mobile.
                            </p>
                        </div>
                        <div class="col-span-2 col-start-11 work-details-col">
                            <div className={"work-details"}>
                                <p className={"accent"}>Worked for</p>
                                <p>Blue Reply /</p>
                                <p>Keycrime /</p>
                                <p>Egea Tecnologie Informatiche /</p>
                                <p>Sesar Lab at UniMi /</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;