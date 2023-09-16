import React from "react";


import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import zee5 from "../Files/zee5.png";
import lifestyle from "../Files/lifestylestore.png";
import clarks from "../Files/clarksusa.png";
import sugar from "../Files/myglow.png";
import  amazon from "../Files/amazon.png"

const Project = () => {
    return (
        <>
            <section id="projects">
                <div className="main-text">
                    <h2>
                        <span>Projects</span>
                    </h2>
                    <p >Some of the things that i have built...</p>
                </div>


                <div className="nav-link projects" id="nav-link-projects">
                    <div className="project-card">
                        <img src={zee5} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Zee5</h5>
                            <p className="project-description">
                            A clone of Zee5 an online video streaming website.It was a individual project
                            </p>
                            <p className="project-tech-stack">
                                Tech-Stack : HTML || CSS || JS
                            </p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a href="https://superlative-puffpuff-2f447f.netlify.app/" target="_blank">
                                        <i>
                                            Live {/*  <SiNetlify size={15} /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/SagarN21/odd-insurance-2910"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={lifestyle} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of LifestyleStores</h5>
                            <p className="project-description">
                            Led a group project to create a clone of Lifestyle Stores an online e-commerce website offering national and international fashion products and accessories. Ensured successful completion as the team lead.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML || CSS || JS</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://lucent-clafoutis-622414.netlify.app/womens_index"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/SagarN21/urbane-look-6820"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={clarks} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Clarks USA</h5>
                            <p className="project-description">
                            Individually developed a clone of clarksusa.com within 5 days, replicating the online platform for Clarks USA and showcasing a diverse range of footwear products.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML || CSS || JS || React</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://wonderful-beignet-2bd902.netlify.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/SagarN21/ProjectB23"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={sugar} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Sugar Cosmetics</h5>
                            <p className="project-description">
                            This is the clone of sugarcosmetic website which basically deals with various cosmetics products . Collabarative project of 5 members. Duration- 5 days.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML || CSS ||  JS || REACT ||  REDUX || CHAKRA UI</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://my-glow-ankush3681.vercel.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/ankush3681/noisy-mailbox-2939"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={amazon} alt="" />
                        <div className="layer">
                            <h5 className="project-title">Clone of Amazon</h5>
                            <p className="project-description">
                            This is the clone of Amazon website sells products from various categories.It was a collaborative project built within a time span of 5 days.
                            </p>
                            <p className="project-tech-stack">Tech-Stack : HTML || CSS ||  JS || REACT ||  REDUX || NODE.JS || EXPRESS.JS || Mongoose || MongoDB || CHAKRA UI</p>
                            <div id="project-links">
                                <div className="project-deployed-link">
                                    <a
                                        href="https://trendyshop.vercel.app/"
                                        target="_blank"
                                    >
                                        <i>
                                            Live   {/* <SiNetlify /> */}
                                        </i>
                                    </a>
                                </div>
                                <div className="project-github-link">
                                    <a
                                        href="https://github.com/AnmolSahota/Trendyshop"
                                        target="_blank"
                                        id="project-deployed-link"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
