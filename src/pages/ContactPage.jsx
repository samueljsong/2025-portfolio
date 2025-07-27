import { SeparatorSmall } from "../components/SeparatorSmall"

export const ContactPage = () => {

    return(
        <div className=" flex flex-col w-[100%] gap-4">
            <h1 className=" font-medium text-4xl text-primary squish">Contact</h1>
            <SeparatorSmall></SeparatorSmall>
            <p className="font-extralight text-[1.1rem] text-primary squish">Feel free to reach out via any of the methods below. I'm currently open to new opportunities, including freelance projects.</p>
            <div className=" flex w-[100%]">
                <div className=" w-[50%]">
                    <h2 className=" font-medium text-2xl text-primary squish">Email</h2>
                    <p className=" font-extralight text-[1.1rem] text-tertiary squish">semuall0108@gmail.com</p>
                </div>
                <div>
                    <h2 className=" font-medium text-2xl text-primary squish">LinkedIn</h2>
                    <p className=" font-extralight text-[1.1rem] text-tertiary squish">in/samueljsong</p>
                </div>
            </div>
            <div className=" flex w-[100%]">
                <div className=" w-[50%]">
                    <h2 className=" font-medium text-2xl text-primary squish">GitHub</h2>
                    <p className=" font-extralight text-[1.1rem] text-tertiary squish">git/samueljsong</p>
                </div>
            </div>
            <SeparatorSmall></SeparatorSmall>
        </div>
    )
}