import { projects } from "@/utils/data";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
    return (
        <section className={"projects"}>
            <div className="container mx-auto">
                <h2>Take a look at my projects</h2>

                <table className="table-auto projects-table">
                    <thead>
                        <tr>
                            <th><p>Title</p></th>
                            <th className={"technologies-title"}><p>Technologies</p></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p,i) => {
                            return (
                                <tr className={"project"} key={i} data-cursor-img={`/images/projects/${p.imgSrc}`}>
                                    <td className={"name"}>
                                        <a href={p.href}>
                                            <p>{p.name}</p>
                                        </a>
                                    </td>
                                    <td>
                                        <a href={p.href}>
                                            <div className={"technologies"}>
                                                {p.technologies.map((t,i) => (<div className={"technology"} key={i}>{t}</div>))}
                                            </div>
                                        </a>
                                    </td>
                                    <td className={"arrow-box"}>
                                        <a href={p.href}>
                                            <div className={"arrow"}>
                                                <FaArrowRight />
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Projects;