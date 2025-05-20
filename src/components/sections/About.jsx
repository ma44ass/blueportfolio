import {RevealOnScroll} from '../RevealOnScroll';


    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Responsive web design",
        "Version Control",
        "API Integration"
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Django",
        "API Development",
        "Database Management",
        "Authentication & Authorization",
    ];


export const About = () => {

    const certificates = [
        {
            name: "Google UX Design by Google on Coursera (2025)",
            link: "#https://coursera.org/share/411e05fffcb07d6020108603086e70d6",
        },
        {
            name: "Meta Back-End Developer by Meta on Coursera (2025)",
            link: "https://coursera.org/share/3b17164a9433a0b23ce6b00300488447",
        },
        {
            name: "Meta Front-End Developer by Meta on Coursera (2024)",
            link: "https://coursera.org/share/883e2b4076c0bebacbf246948f0c81c0",
        },
        {
            name: "Google Data Analytics by Google on Coursera (2024)",
            link: "https://coursera.org/share/333936587d9fc9084fd1ccfbe7c86c27",
        },
        {
            name: "AI Career Essentials by Alx (2024)",
            link: "https://intranet.alxwe.com/certificates/CcXMzNJS3R",
        },
    ];

    return (
    <section
        id ="about"
        className="min-h-screen flex items-center justify-center">
        <RevealOnScroll>

            <div className="max-w-4xl mx-auto px-4">
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
                <div className="my-5 rounded-xl p-6 bg-[#0b0f15] hover:bg-[#141b23] transition-colors">
    <h3 className="text-2xl font-semibold mb-4 text-blue-500">Certificates</h3>

    <div className="space-y-4">
        {certificates.map((cert, index) => (
            <div
                key={index}
                className="bg-[#1f29337] hover:bg-[#0b0d11] hover:rounded-xl transition-all p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
                <h4 className="font-semibold text-blue-300 mb-2 sm:mb-0">{cert.name}</h4>
                <a
                    className="text-cyan-300 hover:text-white bg-blue-500/20 py-2 px-5 rounded-full text-sm hover:bg-cyan-400 hover:shadow-md transition-all whitespace-nowrap mt-2 sm:mt-0 inline-flex items-center justify-center"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Certificate
                </a>
            </div>
        ))}
    </div>
</div>







            </div>

            </div>
        </RevealOnScroll>
    </section>
    );
}