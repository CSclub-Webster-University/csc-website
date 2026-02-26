export default function ProjectCard({ project }) {
    return (
        <div className="brutal-border brutal-shadow bg-black hover:bg-white hover:text-black group transition-none flex flex-col h-full">
            {/* Brutalist Image Wrapper */}
            <div className="h-48 border-b-2 border-white group-hover:border-black relative overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-none"
                    />
                ) : (
                    <div className="font-mono text-[#00ff00] group-hover:text-black font-black text-xl tracking-widest">
                        NO_IMAGE_DATA
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">{project.title}</h3>

                <p className="text-sm font-bold leading-relaxed mb-6 font-mono text-[#cccccc] group-hover:text-black">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies && project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-black uppercase bg-white text-black px-2 py-1 border-2 border-white group-hover:border-black group-hover:bg-black group-hover:text-[#00ff00]">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer (Links & Contributors) */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-white group-hover:border-black font-mono font-bold text-sm">
                    <div className="flex gap-2">
                        <span className="text-[#00ff00] group-hover:text-black">AUTHORS:</span>
                        {project.contributors && project.contributors.length > 0 ? project.contributors.length : 0}
                    </div>
                    <div className="flex gap-4">
                        {project.githubUrl && (
                            <a href={project.githubUrl} className="hover:underline decoration-2 underline-offset-4">
                                [SRC]
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} className="hover:underline decoration-2 underline-offset-4 text-[#00ff00] group-hover:text-black">
                                [RUN]
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
