import chhavi from "../../assets/chhavi_kohli.jpg";
import { FaLinkedin, FaGithub, FaEnvelope  } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-2 md:gap-4">
        <div className="bg-blue-100 p-2">
          <aside className="bg-white rounded-lg shadow-sm ">
            <div className=" w-full  rounded-sm">
              <img
                src={chhavi}
                alt="Chhavi Kohli"
                className="w-full h-full object-cover"
              />
            </div>
            {/* CONTACT */}
            <section className="px-2">
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[10px] tracking-widest text-gray-400">CONTACT</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Phone:</span> 7500674593
                </li>
                <li>
                  <span className="font-medium">Location:</span> Noida
                </li>
                {/* Optional links */}
                <li>
                  <div className="mt-2 flex items-center gap-2 font-medium">
                    <a
                      href="https://www.linkedin.com/in/chhavikohli96/"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer">
                     <FaLinkedin className="size-5" />
                    </a>
                    <a
                      className="cursor-pointer"
                      href="https://github.com/chhavikohli"
                      target="_blank"
                      rel="noreferrer">
                      <FaGithub className="size-5" />
                    </a>
                     <a href="mailto:chhavikohli96@gmail.com.com">
                      <FaEnvelope  className="size-5" />
                    </a>
                  </div>
                </li>

              </ul>
            </section>

            {/* SKILLS */}
            <section className="px-2 pb-3">
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[10px] tracking-widest text-gray-400">SKILLS</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Angular
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  React
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Typescript
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Javascript
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  REDUX
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  RxJS
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  NgRx
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Signals
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Tailwind CSS
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  TypeScript
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Modular Architecture
                </li>
                <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Node.js
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Express.js
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 REST APIs
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 Mongo DB
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  MySQL
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  AmCharts
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Material UI/Angular Material
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Fabric.js
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  WebSockets
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  AWS
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  Azure
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                  CI/CD
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 Jenkins
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 Github
                </li> <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 Bitbucket
                </li>
                 <li className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800">
                 Figma
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="px-2 pb-3">
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[10px] tracking-widest text-gray-400">EDUCATION</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                <li className="px-2 py-1 text-xs text-gray-800">
                  <div className="font-bold">B-Tech:CSE</div>
                  <div>DIT University - Dehradun, India</div> 
                  <div>2018 - Score (CGPA - 80%)</div>
                </li>
                <li className="px-2 py-1 text-xs text-gray-800">
                   <div className="font-bold">XII - ISC</div>
                  <div>St. Jude’s School - Dehradun</div> 
                  <div>2014 - Score - 81.75%</div>
                </li>
                <li className="px-2 py-1 text-xs text-gray-800">
                   <div className="font-bold">X - ICSE</div>
                  <div>St. Jude’s School - Dehradun</div> 
                  <div>2012 - Score - 88.33%</div>
                </li>
              </ul>
            </section>
          </aside>
        </div>
        {/* Content */}
        <div className="p-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-blue-500">Chhavi Kohli</span> 👋
            </h1>

            <p className="mt-6 text-md text-gray-600 text-left">
              Specialist Software Engineer with 7.5+ years of experience building scalable, high performance web applications using Angular (7–15+),React, Node.js, and TypeScript. Strong expertise in modular architecture, lazy loading, RxJS, NgRx, real-time systems, and data visualisation. Proven record of improving performance, accelerating delivery.
            </p>

            <p className="mt-4 text-gray-400 text-left">
              Strong in modular architecture, lazy loading, real-time systems,
              data visualisation, and mentoring teams in Agile environments.
            </p>

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="">
                    {/* LTIMindtree */}
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-30 h-10 bg-gray-50  inline-flex items-center justify-center text-gray-400 relative z-10">
                        <span className="text-sm">09/2023 - Current</span>
                      </div>
                      <div className="flex-grow pl-4 text-left">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Specialist Software Engineer</h2>
                        <h2 className="font-light text-sm text-gray-400 mb-1"> LTIMindtree - Noida , India.</h2>

                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Built reusable Angular components and dynamic reactive forms, reducing delivery
                            time by <span className="font-semibold">40%</span>.
                          </li>

                          <li>
                            Developed custom <span className="font-semibold">amCharts</span> dashboards
                            with real-time data updates.
                          </li>

                          <li>
                            Migrated monolithic apps to lazy-loaded modular architecture, improving
                            performance and scalability.
                          </li>

                          <li>
                            Delivered responsive, accessible UI aligned closely with
                            <span className="font-semibold"> Figma</span> designs.
                          </li>

                          <li>
                            Improved reliability through unit testing
                            (<span className="font-semibold">Jasmine/Karma</span>) and structured code reviews.
                          </li>

                          <li>
                            <span className="font-semibold">Project:</span> MARSH (Insurance Analytics & Claims Platforms)
                          </li>

                          <li>
                            <span className="font-semibold">Tech:</span> Angular 15+, Node.js, MongoDB, amCharts, Azure, Agile
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Prodeasy */}
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-30 h-10 bg-gray-50  inline-flex items-center justify-center text-gray-400 relative z-10">
                        <span className="text-sm">04/2021 - 09/2023 </span>
                      </div>
                      <div className="flex-grow pl-4 text-left">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Senior Software Engineer</h2>
                        <h2 className="font-light text-sm text-gray-400 mb-1"> Prodeasy</h2>

                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Led Angular front-end architecture and modularisation.
                          </li>

                          <li>
                            Built a real-time collaborative whiteboard using Fabric.js.
                          </li>

                          <li>
                            Optimised APIs and improved application load times.
                          </li>

                          <li>
                            Mentored developers and streamlined CI/CD processes.
                          </li>
                          <li>
                            <span className="font-semibold">Project:</span> Shorterloop (Product Management Platform)
                          </li>

                          <li>
                            <span className="font-semibold">Tech:</span>  Angular, Node.js, Fabric.js, AWS, MySQL
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Evontechnoligies */}
                    <div className="flex relative">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-30 h-10 bg-gray-50  inline-flex items-center justify-center text-gray-400 relative z-10">
                        <span className="text-sm">01/2019 - 04/2021</span>
                      </div>
                      <div className="flex-grow pl-4 text-left">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Software Engineer</h2>
                        <h2 className="font-light text-sm text-gray-400 mb-1">Evon Technologies</h2>
                        <div>
                          <span className="font-semibold">Project: FURAH </span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">

                          <li>
                            Developed applications using Angular 8 and Material UI in collaborative environment, improving user engagement.
                          </li>

                          <li>
                            Integrated Chargebee for payments and subscriptions, streamlining payment processes.
                          </li>

                          <li>
                            Implemented NgRx and RxJS for robust state management.
                          </li>

                          <li>
                            Enhanced UX with real-time APIs and dynamic alerts, increasing user satisfaction.
                          </li>

                        </ul>

                        <div className="mt-2">
                          <span className="font-semibold">Project:  JIMJOBS  </span>
                        </div>

                        <ul className="list-disc pl-5 space-y-2 text-gray-700">

                          <li>
                            Tech: Angular 7, OpenID, Jenkins, Azure Insights
                          </li>


                        </ul>
                      </div>
                    </div>



                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>



    </section>
  );
}
