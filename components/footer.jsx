import { FaArrowRight } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineMail, MdOutlineMovie } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 md:gap-8 gap-y-12">

                    <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                        <div className={"contact"}>
                            <h3>Get in touch</h3>
                            <a href="mailto:giuseppe.delcampo@outlook.com">
                                <button className={"contact-button"}>
                                    <p>Send an email</p>
                                    <div className={"arrow"}>
                                        <FaArrowRight />
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 xl:col-span-5">
                        <div className={"socials"}>
                            <h3>Reach me on my socials</h3>
                            <div className={"icons"}>
                                <a href="https://letterboxd.com/Giuseppetm/" data-cursor-stick="#stick-icon-1" id="stick-icon-1" title='Letterboxd'>
                                    <MdOutlineMovie />
                                </a>
                                <a href="https://www.youtube.com/channel/UC48YylNs29E-9-EgA_0noFw" data-cursor-stick="#stick-icon-2" id="stick-icon-2" title='Youtube'>
                                    <AiFillYoutube />
                                </a>
                                <a href="https://www.linkedin.com/in/giuseppe-del-campo/" data-cursor-stick="#stick-icon-3" id="stick-icon-3" title='Linkedin'>
                                    <AiFillLinkedin />
                                </a>
                                <a href="mailto:giuseppe.delcampo@outlook.com" data-cursor-stick="#stick-icon-4" id="stick-icon-4" title='Mail'>
                                    <MdOutlineMail />
                                </a>
                                <a href="https://github.com/Giuseppetm" data-cursor-stick="#stick-icon-5" id="stick-icon-5" title='GitHub'>
                                    <VscGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-3">
                        <div className={"site-details"}>
                            <div>
                                <p>Website made by</p>
                                <p className={"light-accent"}><a href="https://github.com/Giuseppetm">Giuseppe Del Campo</a></p>
                            </div>
                            <div>
                                <p>Technologies used</p>
                                <p className={"light-accent"}>React, NextJS, GSAP</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;