import { useEffect } from "react";
import { NextSeo } from 'next-seo';
import { calculateAge } from "@/utils/functions";
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
        '-pointer': 'a, button, .theme, .project'
      }
    });
  }, []);

  return (
    <>
      <NextSeo
          title={`Giuseppe Del Campo | ${calculateAge('10-11-1999')} Years Old Frontend Developer`}
          description={`Personal website of Giuseppe Del Campo (${calculateAge('10-11-1999')} Years Old Frontend Developer).`}
          canonical={"https://giuseppedelcampo.netlify.app/"}
          openGraph={{
              url: "https://giuseppedelcampo.netlify.app/",
              title: `Giuseppe Del Campo | ${calculateAge('10-11-1999')} Years Old Frontend Developer`,
              description: `Personal website of Giuseppe Del Campo (${calculateAge('10-11-1999')} Years Old Frontend Developer).`,
              site_name: `Giuseppe Del Campo | ${calculateAge('10-11-1999')} Years Old Frontend Developer`,
              type: 'website',
              locale: "en_US",
              images: [
                  {
                      url: 'images/preview.png',
                      type: 'image/png',
                  }
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
  );
};

export default Index;
