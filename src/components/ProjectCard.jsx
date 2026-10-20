
export const ProjectCard = ({image, title, description, link}) => {

    const isDisabled = title === "GreenBanana (Undergoing Redevelopment)";

    const onCardClickHandler = () => {
        if(isDisabled) return;
        window.open(link, '_blank');
    }

    return(
        <>
            <div onClick={onCardClickHandler} className={`flex flex-col bg-[#f1f5f9] rounded-xl items-center justify-center transition-all duration-200
                ${isDisabled
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer hover:bg-accent"
                }`}>
                <div className=" flex flex-col gap-4 m-8 ">
                    <img src={image} alt="" className=" rounded-xl"/>
                    <div>
                        <h3 className=" font-medium text-xl text-primary squish">{title}</h3>
                        <p className=" font-extralight text-[1.1rem] text-primary squish">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}