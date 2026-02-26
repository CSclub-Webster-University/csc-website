import { useState, useEffect } from 'react'
import projectsData from '../data/projects.json'
import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ui/ProjectCard'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <section id="projects" className="py-24 border-b-2 border-white bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader title="Source_Code" subtitle="[Public Repos]" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
