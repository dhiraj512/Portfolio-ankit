import { projects } from "./Data/data";
import ProjectCard from './ProjectCard'

export default function Project() {
  return (
    <>
      <h2 className="headings">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
        {projects.map((p, id) => (
          <ProjectCard key={id} name={p.name} description={p.description} Demo={p.Demo} github_url={p.github_url} key_techs={p.key_techs} ImgSrc={p.ImgSrc} />
        ))}
      </div>
    </>
  )
}
