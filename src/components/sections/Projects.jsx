import {RevealOnScroll} from '../RevealOnScroll';

const projectsList = [
    {
        title: "Movie Web App",
        description:
            "A small web app where you can find the latest movies, with enhanced search. Used The Movie DB API to fetch movies data and Appwrite for backend server",
        tech: ["Tailwind CSS", "React", "Node.js", "Appwrite"],
        link: "https://ma44ass.github.io/moviesweb-app/",
    },


]

export const Projects = () => {

    return (
            <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[rgb(0,0,0)] via-[#031128] to-[#041744] text-white"
        >
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow-md">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {projectsList.map((project, index) => (
                    <div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 hover:shadow-xl"
                    >
                        <h3 className="text-xl text-center font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4"> {/*mapping through techs used*/}
                            {project.tech.map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center"> {/*Link to the project*/}
                            <a
                            href={project.link}
                            className="text-xl text-blue-400 hover:text-blue-300 transition-colors my-4 mx-auto"
                            target="_blank"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
        )
    }