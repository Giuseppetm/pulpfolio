import Header from "@/components/header";
import ImagesMarquee from "@/components/imagesMarquee";

const Hero = () => {
    return (
        <section className={"hero"}>
            <Header />

            <div className={"title"}>
                <h1>
                Giuseppe Del Campo
                </h1>
            </div>

            <ImagesMarquee />
            
            <div className={"description"}>
                <p>
                    <b className={"accent"}>Passionate Frontend Developer</b> at <b>People Lab Srl</b> based in Milan, 
                    currently working for <b>Protocube Reply</b> on software development for the management of 3D models. 
                </p>

                <p>
                    Experienced in multiple contexts such as clinical, industrial, and e-commerce related fields. 
                    Skilled mostly in React and Vue environments with further knowledge in .NET with the latest front-end frameworks both web and mobile.
                </p>
            </div>
        </section>
    );
};

export default Hero;