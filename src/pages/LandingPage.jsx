import { Button } from "../components/Button"
import { Separator } from "../components/Separator"

export const LandingPage = () => {

    return(
        <div className=" w-[100%]">
            <section className=" flex flex-col gap-4">
                <div>
                    <h1 className=" font-medium text-4xl text-primary squish">Hey, I'm Sam</h1>
                    <h2 className=" font-light text-2xl text-tertiary squish">A software developer from CA based in Van </h2>
                </div>
                <p className=" font-extralight text-xl text-primary squish">I'm a problem solver who thrives on continuous learning and collaboration. Most recently, I worked at Powerex as a full-stack developer. Prior to that, I developed web solutions for both personal projects and client needs.</p>
                <Button destination={''} text={'More Information'}></Button>
            </section>
            <Separator />
            <section className=" flex flex-col gap-4">
                <div>
                    <h2 className=" font-medium text-2xl text-primary squish">Personal Projects</h2>
                    <p className=" font-extralight text-xl text-tertiary squish">Below is a selection of recent projects that I've worked on.</p>
                </div>
                <Button destination={'/projects'} text={'View older projects'} />
            </section>
        </div>
    )
}