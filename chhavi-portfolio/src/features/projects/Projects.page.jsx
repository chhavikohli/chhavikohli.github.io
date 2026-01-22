
export default function Projects() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xl text-blue-500 tracking-widest font-medium title-font mb-1">PROJECTS</h2>
                    <h2 className="text-lg font-medium title-font text-gray-900">Turning ideas into scalable, user‑focused experiences.</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-15 h-20 mr-3 inline-flex items-center justify-center flex-shrink-0">
                                   <img src='https://shorterloop.com/assets/images/shorterloop-logo.svg'></img>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Shorterloop: Real-Time Product Collaboration</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Built an AI‑driven product management platform, leading front‑end architecture, developing a real‑time collaborative whiteboard, and optimizing APIs for major performance gains.</p>
                                <a className="mt-3 text-blue-500 inline-flex items-center" href='https://app.shorterloop.com/' target='_blank'>Try Now
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                               <div className="w-15 h-20 mr-3 inline-flex items-center justify-center flex-shrink-0">
                                   <img src='https://snapied.com/images/snapied-logo.svg'></img>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Snapied: Democratizing Graphic Design</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Built an intuitive online graphic design platform with a drag‑and‑drop editor, one‑click background removal, and access to millions of stock photos, enabling anyone to create professional‑quality visuals.</p>
                                <a className="mt-3 text-blue-500 inline-flex items-center" href='https://app.snapied.com/' target='_blank'>Try Now
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                       <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                               <div className="w-10 h-20 mr-3 inline-flex items-center justify-center flex-shrink-0">
                                   <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg'></img>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Deep Level Searching – JavaScript Utility</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">A lightweight JavaScript utility for deep searching nested objects and arrays, returning filtered results that match a given keyword.</p>
                                <a className="mt-3 text-blue-500 inline-flex items-center" href='https://github.com/chhavikohli/deep-searching' target='_blank'>Visit Repository
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                        <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                               <div className="w-10 h-20 mr-3 inline-flex items-center justify-center flex-shrink-0">
                                   <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg'></img>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Real Time Chat Application</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Built a real‑time chat application using Express, Node.js, AJAX, jQuery, and sockets, enabling seamless live messaging with a lightweight and responsive interface.</p>
                                <a className="mt-3 text-blue-500 inline-flex items-center" href='https://github.com/chhavikohli/chat-application' target='_blank'>Visit Repository
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>
    );
}