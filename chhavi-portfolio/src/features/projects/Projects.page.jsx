
import { projectList } from "../../shared/constants/projects.collection.constant";
export default function Projects() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xl text-blue-500 tracking-widest font-medium title-font mb-1">PROJECTS</h2>
                    <h2 className="text-lg font-medium title-font text-gray-900">Turning ideas into scalable, user‑focused experiences.</h2>
                </div>

                <div className="flex flex-wrap -m-4">
                    {projectList.map((p) => {
                        const href = p.isRepo ? p.repoLink : p.appLink;
                        const cta = p.isRepo ? 'Visit Repository' : 'Try Now';
                        return(
   <div key={p.id} className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-15 h-20 mr-3 inline-flex items-center justify-center flex-shrink-0">
                                        {/* Use alt for accessibility */}
                                        <img src={p.image_url} alt={p.title} className="max-h-20 object-contain" />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        {p.title}
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">{p.desc}</p>
                                    {href && (
                                        <a
                                            className="mt-3 text-blue-500 inline-flex items-center"
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {cta}
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    )}
                                    <div>
                                      {p.appLink && p.repoLink && (
                                        <a
                                            className="mt-3 text-blue-500 inline-flex items-center"
                                            href={p.appLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Now
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}






