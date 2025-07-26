
export const NavBar = () => {

    return(
        <nav className=" py-15 w-[100%] flex justify-between items-center font-secondary font-medium text-[0.9rem]">
            <div>
                <ul className=" cursor-pointer">js</ul>
            </div>
            <div className=" flex gap-3">
                <ul className=" cursor-pointer">
                    <a href="/information">Information</a> 
                </ul>
                <ul className=" cursor-pointer">
                    <a href="/contact">Contact</a>
                </ul>
            </div>
        </nav>
    )
}