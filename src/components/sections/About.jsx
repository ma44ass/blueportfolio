import {RevealOnScroll} from '../RevealOnScroll';

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Bootstrap",
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Django",
        "RestFul Api",
        "MySQL",
    ];

    return (
    <section
        id ="about"
        className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-9 mb-3 border-white/10 border hover:-translate-y-1 transition-all">

                    <p className="text-gray-300 mb-6">
                    I am a self-taught full stack developer with a passion for turning concepts into reality. Focused on creating seamless, user-centered experiences, I thrive on solving complex problems and constantly evolving my skills to stay ahead in the tech world.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold m">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,10,246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold m">Backend</h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,10,246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transtion-all">
                    <h3 className="text-xl font-bold mb-4">Cerificates</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-xl font-bold mb-4">

                        <div>
                            <h4 className="text-blue-300 py-1 px-2 rounded-full">
                                Google UX Design by Google on Coursera (2025)
                                </h4>
                                <p className="text-sm text-gray-300 mb-6">
                                covered user research, wireframing, prototyping, and testing to create intuitive, user-centered designs.
                                <br/>
                                    <a href="#"
                                        className="text-sm text-cyan-300 py-1 px-1">
                                            View Certificate</a>
                                </p>

                            </div>

                            <div>
                                <h4 className="text-blue-300 py-1 px-2 rounded-full">
                                    Meta Back-End Developer by Meta on Coursera (2025)
                                </h4>
                                <p className="text-sm text-gray-300 mb-6">
                                    focused on databases, API creation, server-side technologies, and security practices to create secure, efficient applications.
                                    <br/>
                                    <a href="#"
                                        className="text-sm text-cyan-300 py-1 px-1">
                                        View Certificate</a>
                                    </p>

                            </div>

                            <div>
                                <h4 className="text-blue-300 py-1 px-2 rounded-full">
                                    Meta Front-End Developer by Meta on
                                    Coursera (2024)
                                </h4>
                                <p className="text-sm text-gray-300 mb-6">
                                    covers the fundamentals of web design and development, focusing on creating engaging and accessible interfaces with modern front-end technologies.<br/>
                                    <a href="#"
                                        className="text-sm text-cyan-300 py-1 px-1">
                                            View Certificate</a>
                                </p>

                            </div>

                            <div>
                                <h4 className="text-blue-300 py-1 px-2 rounded-full">
                                    AI Career Essentials by Alx
                                    (2024)
                                </h4>
                                <p className="text-sm text-gray-300 mb-6">
                                    foundational concepts in artificial intelligence, covering machine learning, data analysis, and AI applications to build a strong understanding of AI technologies.<br/>
                                    <a href="#"
                                        className="text-sm text-cyan-300 py-1 px-1">
                                            View Certificate</a>
                                </p>

                            </div>


                        </div>

                    </div>






            </div>
        </RevealOnScroll>
    </section>
    );
}