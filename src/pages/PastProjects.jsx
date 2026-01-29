import { Button } from "../components/Button"
import { ProjectCard } from "../components/ProjectCard"
import pastProjects from "../data/PastProjectData"

export const PastProjects = () => {

    return(
        <section className=" flex flex-col gap-4">
            <div>
                <h2 className=" font-medium text-2xl text-primary squish">
                    Past Projects
                </h2>
                <p className=" font-extralight text-[1.1rem] text-tertiary squish">
                    Below is a the iteration process of my frontend journey for my portfolio site. *Links are not functional*
                </p>
            </div>
            <div className=" flex flex-col gap-8 mb-8">
                {
                    pastProjects.map((project, index) => {
                        return(
                            <ProjectCard {...project} key={index}/>
                        )
                    })
                }
            </div>
            <Button destination={'/'} text={'Back to main page'} />
            <span className=" mt-8"></span>
        </section>
    )
}