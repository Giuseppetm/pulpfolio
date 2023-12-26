import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Header from "@/components/header";
import ImagesMarquee from "@/components/imagesMarquee";

MouseFollower.registerGSAP(gsap);

const Index = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const cursor = new MouseFollower({
      stateDetection: {
        '-pointer': 'a,button,.square'
      }
    });
  }, []);

  return (
    <>
      {/* TODO: NextSEO stuff */}
      <Header />
      <div>Giuseppe Del Campo</div>
      <ImagesMarquee />
    </>
  );
};

export default Index;
