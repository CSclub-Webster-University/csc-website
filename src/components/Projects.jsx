import { useState, useEffect } from 'react'
import projectsData from '../data/projects.json'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <section id="projects" className="py-24 border-b border-slate-800 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                        Check out some of the amazing projects built by our talented members. From web apps to machine learning models.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map(project => (
                        <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                                    <div className="flex -space-x-2">
                                        {/* Placeholder avatars for contributors */}
                                        {project.contributors.map((c, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white z-0" title={c}>
                                                {c.charAt(0)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
