import {RevealOnScroll} from '../RevealOnScroll';

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


export const About = () => {
    
    const certificates = [
        {
            name: "Google UX Design by Google on Coursera (2025)",
            description:"Covered user research, wireframing, prototyping, and testing to create intuitive, user-centered designs.",
            link: "#",
        },
        {
            name: "Meta Back-End Developer by Meta on Coursera (2025)",
            description:"Focused on databases, API creation, server-side technologies, and security practices to create secure, efficient applications.",
            link: "https://coursera.org/share/3b17164a9433a0b23ce6b00300488447",
        },
        {
            name: "Meta Front-End Developer by Meta on Coursera (2024)",
            description:"Covers the fundamentals of web design and development, focusing on creating engaging and accessible interfaces with modern front-end technologies.",
            link: "https://coursera.org/share/883e2b4076c0bebacbf246948f0c81c0",
        },
        {
            name: "AI Career Essentials by Alx (2024)",
            description:"Foundational concepts in artificial intelligence, covering machine learning, data analysis, and AI applications to build a strong understanding of AI technologies.",
            link: "https://intranet.alxwe.com/certificates/CcXMzNJS3R",
        },
    ];

    return (
    <section
        id ="about"
        className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

            <div className="max-w-3xl mx-auto px-4">
                <img src=''/>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-9 mb-3 border-white/10 border hover:-translate-y-1 transition-all">

                    <p className="text-gray-300 mb-6">
                    I am a self-taught full stack developer with a passion for turning concepts into reality. Focused on creating seamless, user-centered experiences, I thrive on solving complex problems and constantly evolving my skills to stay ahead in the tech world.
                    </p>
                {/*Skills sections*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/*Front-End*/}
                        <div className="rounded-xl p-6 bg-[#0b0f15] hover:bg-[#141b23] transition-colors">
                            <h3 className=" text-2xl font-semibold mb-4 text-blue-500">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/20 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-md transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/*Back-End*/}
                        <div className="rounded-xl p-6 bg-[#0b0f15] hover:bg-[#141b23] transition-colors">
                            <h3 className=" text-2xl font-semibold mb-4 text-blue-500">Backend</h3>

                            <div className="flex flex-wrap gap-3">
                                {backendSkills.map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/20 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                {/*Certificates*/}
                <div className=" my-8 rounded-xl p-6 bg-[#0b0f15] hover:bg-[#141b23] transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-blue-500">Cerificates</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificates.map((cert, index) => (<span
                            key={index}
                            className="bg-[#1f29337] p-4 rounded-xl hover:bg-[#0b0d11] transition-colors"
                            >
                                <h4 className="font-semibold text-blue-300 mb-2">{cert.name}</h4>
                                <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
                                <a
                                    className="text-sm text-cyan-300 hover:text-cyan-400 transition-colors"
                                    href={cert.link}
                                    target='_blank'
                                    referrerPolicy='no_referrer'>
                                        View Certificate →
                                </a>

                            </span>
                            )
                        )}


                    </div>

                </div>
            </div>

            </div>
        </RevealOnScroll>
    </section>
    );
}