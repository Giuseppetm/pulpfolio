import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import GattacaMarquee from "@/components/gattacaMarquee";
import Footer from "@/components/footer";
import Header from "@/components/header";

MouseFollower.registerGSAP(gsap);

const Index = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const cursor = new MouseFollower({
      stateDetection: {
        '-pointer': 'a,button,.theme'
      }
    });
  }, []);

  return (
    <>
      {/* TODO: NextSEO stuff */}
      <Header />
      <Hero />
      <Projects />
      <GattacaMarquee />
      <Footer />
    </>
  );
};

export default Index;
